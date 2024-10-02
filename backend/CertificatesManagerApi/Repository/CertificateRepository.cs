using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;
using CertificatesManagerApi.Mappers;
using Microsoft.EntityFrameworkCore;

namespace CertificatesManagerApi.Repository
{
    public class CertificateRepository
    {
        private readonly CertificateManagerContext _context;

        public CertificateRepository(CertificateManagerContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TableCertificatesDTO>> GetTableCertificates()
        {
            return await _context.Certificates
                .Include(c => c.Supplier)
                .Include(c => c.Type)
                .Select(certificate => CertificateMapper.ToMultipleDto(certificate)).ToListAsync();
        }

        public async Task<CertificateDTO> GetCertificate(string handle)
        {
            return await _context.Certificates
                .Include(c => c.Supplier)
                .Include(c => c.Type)
                .Include(c => c.Comments)
                    .ThenInclude(comment => comment.User)
                .Include(c => c.CertificateUsers)
                    .ThenInclude(cU => cU.User)
                .Where(certificate => certificate.Handle.ToString() == handle)
                .Select(certificate => CertificateMapper.ToDto(certificate))
                .FirstOrDefaultAsync();
        }

        public async Task<CertificateDTO> PostCertificate(CreateCertificateDTO certificateDTO)
        {
            Certificate certificate = CertificateMapper.ToEntity(certificateDTO);

            Supplier supplier = await _context
                .Suppliers
                .FirstOrDefaultAsync(s => s.Handle == Guid.Parse(certificateDTO.SupplierHandle));

            CertificateType certificateType = await _context
                .CertificateTypes
                .FirstOrDefaultAsync(cT => cT.Handle == Guid.Parse(certificateDTO.CertificateTypeHandle));

            _context.Suppliers.Attach(supplier);
            _context.CertificateTypes.Attach(certificateType);

            certificate.Supplier = supplier;
            certificate.Type = certificateType;


            await _context.Certificates.AddAsync(certificate);
            await _context.SaveChangesAsync();

            return CertificateMapper.ToDto(certificate);
        }

        public async Task<CertificateDTO> UpdateCertificate(Guid handle, UpdateCertificateDTO updateCertificateDTO)
        {
            Certificate oldCertificate = await _context
                .Certificates
                .FirstOrDefaultAsync(c => c.Handle == handle);

            _context.Entry(oldCertificate).State = EntityState.Detached;

            Certificate certificate = CertificateMapper.ToUpdateEntity(updateCertificateDTO);

            certificate.Handle = handle;
            certificate.Id = oldCertificate.Id;

            Supplier supplier = await _context
                .Suppliers
                .FirstOrDefaultAsync(s => s.Handle == Guid.Parse(updateCertificateDTO.SupplierHandle));

            CertificateType certificateType = await _context
                .CertificateTypes
                .FirstOrDefaultAsync(cT => cT.Handle == Guid.Parse(updateCertificateDTO.CertificateTypeHandle));



            _context.Suppliers.Attach(supplier);
            _context.CertificateTypes.Attach(certificateType);

            certificate.Supplier = supplier;
            certificate.Type = certificateType;

            _context.Certificates.Attach(certificate);

            var certificateUsers = await _context
                .CertificateUsers
                .Where(cU => cU.Certificate.Id == certificate.Id)
                .ToListAsync();

            _context.CertificateUsers.RemoveRange(certificateUsers);

            await _context.SaveChangesAsync();

            foreach (var participant in updateCertificateDTO.Participants)
            {
                User user = await _context
                    .Users
                    .FirstOrDefaultAsync(u => u.Handle == participant.Handle);

                CertificateUser? certificateUser = _context
                    .CertificateUsers
                    .FirstOrDefault(cU => cU.User == user && cU.Certificate == certificate);

                _context.Users.Attach(user);

                certificate.CertificateUsers
                    .Add(new CertificateUser()
                    {
                        User = user,
                        Certificate = certificate
                    });
            }


            _context.Certificates.Update(certificate);

            await _context.SaveChangesAsync();

            return CertificateMapper.ToDto(certificate);
        }

        public async Task DeleteCertificate(Guid handle)
        {
            Certificate certificate = await _context
                .Certificates
                .FirstOrDefaultAsync(c => c.Handle == handle);

            _context.Certificates.Remove(certificate);
            await _context.SaveChangesAsync();
        }
    }
}
