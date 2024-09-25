using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Mappers
{
    public class CertificateTypeMapper
    {
        public static CertificateTypeDTO CertificateTypeToDto(CertificateType certificateType)
        {
            CertificateTypeDTO certificateTypeDto = new(certificateType.Type);

            return certificateTypeDto;
        }
    }
}
