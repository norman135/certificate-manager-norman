using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Repository;

namespace CertificatesManagerApi.Services
{
    public class CertificateTypeService
    {
        CertificateTypeRepository _certificateTypeRepository;

        public CertificateTypeService(CertificateTypeRepository certificateTypeRepository)
        {
            _certificateTypeRepository = certificateTypeRepository;
        }

        public IEnumerable<CertificateTypeDTO> GetCertificateTypes()
        {
            return _certificateTypeRepository.GetCertificateTypes();
        }
    }
}
