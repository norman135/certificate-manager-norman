using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Mappers
{
    public class CertificateTypeMapper
    {
        public static CertificateTypeDTO ToDto(CertificateType certificateType)
        {
            CertificateTypeDTO certificateTypeDto = new(certificateType.Handle, certificateType.Type);

            return certificateTypeDto;
        }
    }
}
