using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Mappers
{
    public class CertificateTypeMapper
    {
        public static CertificateTypeDTO ToDto(CertificateType certificateType)
        {
            CertificateTypeDTO certificateTypeDto = new CertificateTypeDTO
            {
                Handle = certificateType.Handle,
                Name = certificateType.Type
            };

            return certificateTypeDto;
        }

        public static CertificateType ToEntity(CertificateTypeDTO certificateTypeDTO)
        {
            CertificateType certificateType = new CertificateType
            {
                Handle = certificateTypeDTO.Handle,
                Type = certificateTypeDTO.Name
            };

            return certificateType;
        }
    }
}
