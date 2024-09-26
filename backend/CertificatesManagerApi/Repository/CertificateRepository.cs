using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;
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

        public async Task<CertificateDTO> GetCertificate(int id)
        {
            return await _context.Certificates
                .Where(certificate => certificate.Id == id)
                .Select(certificate => CertificateMapper.ToDto(certificate))
                .FirstOrDefaultAsync();
        }
    }
}
