using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;
using CertificatesManagerApi.Utils;

namespace CertificatesManagerApi.Mappers
{
    public class CertificateMapper
    {
        public static CertificateDTO ToDto(Certificate certificate)
        {
            CertificateDTO certificateDto = new(
                certificate.Handle,
                SupplierMapper.ToDto(certificate.Supplier),
                CertificateTypeMapper.ToDto(certificate.Type),
                DateConvert.DateToString(certificate.ValidFrom),
                DateConvert.DateToString(certificate.ValidTo),
                certificate.CertificateDocument,
                certificate.Comments
                .Select(comment => CommentMapper.ToDto(comment)).ToList(),
                certificate.CertificateUsers
                .Select(
                    certificateUser => UserMapper.ToDto(certificateUser.User)
                )
                .ToList()
            );
            return certificateDto;
        }

        public static CertificatesDTO ToMultipleDto(Certificate certificate)
        {
            CertificatesDTO certificatesDto = new(
                certificate.Handle,
                new SupplierDTO(
                    certificate.Supplier.Handle,
                    certificate.Supplier.Name,
                    certificate.Supplier.Index,
                    certificate.Supplier.City
                ),
                certificate.Type.Type,
                DateConvert.DateToString(certificate.ValidFrom),
                DateConvert.DateToString(certificate.ValidTo)
            );
            return certificatesDto;
        }

        public static Certificate ToEntity(CreateCertificateDTO certificateDTO)
        {
            Certificate certificate = new()
            {
                ValidFrom = DateConvert.StringToDate(certificateDTO.ValidFrom),
                ValidTo = DateConvert.StringToDate(certificateDTO.ValidTo),
                CertificateDocument = certificateDTO.Document,
                Supplier = SupplierMapper.ToEntity(certificateDTO.Supplier),
                Type = CertificateTypeMapper.ToEntity(certificateDTO.CertificateType)
            };

            return certificate;
        }
    }
}
