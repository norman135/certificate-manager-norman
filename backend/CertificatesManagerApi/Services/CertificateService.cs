using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Services
{
    public class CertificateService
    {
        public static CertificateDTO CertificateToDto(Certificate certificate)
        {
            CertificateDTO certificateDto = new(
                SupplierService.SupplierToDto(certificate.Supplier),
                certificate.Type.Type,
                certificate.ValidFrom,
                certificate.ValidTo,
                certificate.CertificateDocument,
                certificate.Comments
                .Select(comment => CommentService.CommentToDto(comment)).ToList(),
                certificate.CertificateUsers
                .Select(
                    certificateUser => UserService.UserToDto(certificateUser.User)
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
