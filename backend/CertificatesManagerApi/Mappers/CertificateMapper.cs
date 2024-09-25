using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Mappers
{
    public class CertificateMapper
    {
        public static CertificateDTO CertificateToDto(Certificate certificate)
        {
            CertificateDTO certificateDto = new(
                SupplierMapper.SupplierToDto(certificate.Supplier),
                certificate.Type.Type,
                certificate.ValidFrom,
                certificate.ValidTo,
                certificate.CertificateDocument,
                certificate.Comments
                .Select(comment => CommentMapper.CommentToDto(comment)).ToList(),
                certificate.CertificateUsers
                .Select(
                    certificateUser => UserMapper.UserToDto(certificateUser.User)
                )
                .ToList()
            );
            return certificateDto;
        }

        public static CertificatesDTO CertificatesToDto(Certificate certificate)
        {
            CertificatesDTO certificatesDto = new(
                new SupplierDTO(
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
