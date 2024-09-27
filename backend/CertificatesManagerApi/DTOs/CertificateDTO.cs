namespace CertificatesManagerApi.DTOs
{
    public class CertificateDTO(Guid handle, SupplierDTO supplier, CertificateTypeDTO certificateType, string validFrom, string validTo, byte[] document, ICollection<CommentDTO> comments, ICollection<UserDTO> users)
    {
        public Guid Handle { get; set; } = handle;
        public SupplierDTO Supplier { get; set; } = supplier;
        public CertificateTypeDTO CertificateType { get; set; } = certificateType;
        public string ValidFrom { get; set; } = validFrom;
        public string ValidTo { get; set; } = validTo;
        public byte[] Document { get; set; } = document;
        public ICollection<CommentDTO> Comments { get; set; } = comments;
        public ICollection<UserDTO> Participants { get; set; } = users;
    }

    public class CreateCertificateDTO(SupplierDTO supplier, CertificateTypeDTO certificateType, string validFrom, string validTo, byte[] document)
    {
        public SupplierDTO Supplier { get; set; } = supplier;
        public CertificateTypeDTO CertificateType { get; set; } = certificateType;
        public string ValidFrom { get; set; } = validFrom;
        public string ValidTo { get; set; } = validTo;
        public byte[] Document { get; set; } = document;
    }
}
