using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Services
{
    public class CertificateTypeService
    {
        public static CertificateTypeDTO CertificateTypeToDto(CertificateType certificateType)
        {
            CertificateTypeDTO certificateTypeDto = new(certificateType.Type);

            return certificateTypeDto;
        }
    }
}
