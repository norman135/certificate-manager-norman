using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Repository;

namespace CertificatesManagerApi.Services
{

    public class CertificateService
    {
        CertificateRepository _certificateRepository;

        public CertificateService(CertificateRepository certificateRepository)
        {
            _certificateRepository = certificateRepository;
        }

        public IEnumerable<CertificatesDTO> GetCertificates()
        {
            return _certificateRepository.GetCertificates();
        }

        public CertificateDTO GetCertificate(int id)
        {
            return _certificateRepository.GetCertificate(id);
        }

    }
}
