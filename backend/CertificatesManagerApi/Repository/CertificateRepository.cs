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

        public async Task<IEnumerable<CertificatesDTO>> GetCertificates()
        {
            return await _context.Certificates.Select(certificate => CertificateMapper.ToMultipleDto(certificate)).ToListAsync();
        }

        public async Task<CertificateDTO> GetCertificate(string handle)
        {
            return await _context.Certificates
                .Where(certificate => certificate.Handle.ToString() == handle)
                .Select(certificate => CertificateMapper.ToDto(certificate))
                .FirstOrDefaultAsync();
        }

        public async Task<CertificateDTO> PostCertificate(CreateCertificateDTO certificateDTO)
        {
            Certificate certificate = CertificateMapper.ToEntity(certificateDTO);
            await _context.Certificates.AddAsync(certificate);
            await _context.SaveChangesAsync();

            return CertificateMapper.ToDto(certificate);
        }
    }
}
