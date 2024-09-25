using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Mappers;

namespace CertificatesManagerApi.Repository
{
    public class CertificateRepository
    {
        private readonly CertificateManagerContext _context;

        public CertificateRepository(CertificateManagerContext context)
        {
            _context = context;
        }

        public IEnumerable<CertificatesDTO> GetCertificates()
        {
            return _context.Certificates.Select(certificate => CertificateMapper.CertificatesToDto(certificate)).ToList();
        }

        public CertificateDTO GetCertificate(int id)
        {
            return _context.Certificates
                .Where(certificate => certificate.Id == id)
                .Select(certificate => CertificateMapper.CertificateToDto(certificate))
                .FirstOrDefault();
        }
    }
}
