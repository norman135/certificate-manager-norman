using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Mappers
{
    public class CertificateMapper
    {
        public static CertificateDTO ToDto(Certificate certificate)
        {
            CertificateDTO certificateDto = new(
                certificate.Handle,
                SupplierMapper.ToDto(certificate.Supplier),
                certificate.Type.Type,
                certificate.ValidFrom,
                certificate.ValidTo,
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
                certificate.ValidFrom,
                certificate.ValidTo
            );
            return certificatesDto;
        }
    }
}
