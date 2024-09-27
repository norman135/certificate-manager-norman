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

        public static CertificateType ToEntity(CertificateTypeDTO certificateTypeDTO)
        {
            CertificateType certificateType = new();

            certificateType.Handle = certificateTypeDTO.Handle;
            certificateType.Type = certificateTypeDTO.Name;

            return certificateType;
        }
    }
}
