using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;
using CertificatesManagerApi.Utils;

namespace CertificatesManagerApi.Mappers
{
    public class CertificateMapper
    {
        public static CertificateDTO ToDto(Certificate certificate)
        {
            CertificateDTO certificateDto = new CertificateDTO
            {
                Handle = certificate.Handle,
                Supplier = SupplierMapper.ToDto(certificate.Supplier),
                CertificateType = CertificateTypeMapper.ToDto(certificate.Type),
                ValidFrom = DateConvert.DateToString(certificate.ValidFrom),
                ValidTo = DateConvert.DateToString(certificate.ValidTo),
                Document = certificate.CertificateDocument,
                Comments = certificate.Comments
                .Select(comment => CommentMapper.ToDto(comment)).ToList(),
                Participants = certificate.CertificateUsers
                .Select(
                    certificateUser => UserMapper.ToDto(certificateUser.User)
                )
                .ToList()
            };
            return certificateDto;
        }

        public static TableCertificatesDTO ToMultipleDto(Certificate certificate)
        {
            TableCertificatesDTO certificatesDto = new TableCertificatesDTO
            {
                Handle = certificate.Handle,
                Supplier = @$"{certificate.Supplier.Name}, {certificate.Supplier.Index}, {certificate.Supplier.City}",
                CertificateType = certificate.Type.Type,
                ValidFrom = DateConvert.DateToString(certificate.ValidFrom),
                ValidTo = DateConvert.DateToString(certificate.ValidTo)
            };
            return certificatesDto;
        }

        public static Certificate ToEntity(CreateCertificateDTO certificateDTO)
        {
            Certificate certificate = new()
            {
                ValidFrom = DateConvert.StringToDate(certificateDTO.ValidFrom),
                ValidTo = DateConvert.StringToDate(certificateDTO.ValidTo),
                CertificateDocument = certificateDTO.Document
            };

            return certificate;
        }

        public static Certificate ToUpdateEntity(UpdateCertificateDTO certificateDTO)
        {

            Certificate certificate = new()
            {
                ValidFrom = DateConvert.StringToDate(certificateDTO.ValidFrom),
                ValidTo = DateConvert.StringToDate(certificateDTO.ValidTo),
                CertificateDocument = certificateDTO.Document
            };

            return certificate;
        }
    }
}
