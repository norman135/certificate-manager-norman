namespace CertificatesManagerApi.DTOs
{
    public class CertificateDTO(Guid handle, SupplierDTO supplier, string certificateType, DateTime validFrom, DateTime validTo, byte[] document, ICollection<CommentDTO> comments, ICollection<UserDTO> users)
    {
        public Guid Handle { get; set; } = handle;
        public SupplierDTO Supplier { get; set; } = supplier;
        public string CertificateType { get; set; } = certificateType;
        public DateTime ValidFrom { get; set; } = validFrom;
        public DateTime ValidTo { get; set; } = validTo;
        public byte[] Document { get; set; } = document;
        public ICollection<CommentDTO> Comments { get; set; } = comments;
        public ICollection<UserDTO> Participants { get; set; } = users;
    }
}
