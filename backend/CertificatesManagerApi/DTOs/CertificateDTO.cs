namespace CertificatesManagerApi.DTOs
{
    public class CertificateDTO()
    {
        public Guid? Handle { get; set; }
        public SupplierDTO Supplier { get; set; }
        public CertificateTypeDTO CertificateType { get; set; }
        public string ValidFrom { get; set; }
        public string ValidTo { get; set; }
        public byte[] Document { get; set; }
        public ICollection<CommentDTO> Comments { get; set; }
        public ICollection<UserDTO> Participants { get; set; }
    }

    public class TableCertificatesDTO()
    {
        public Guid? Handle { get; set; }
        public string Supplier { get; set; }
        public string CertificateType { get; set; }
        public string ValidFrom { get; set; }
        public string ValidTo { get; set; }

    }

    public class CreateCertificateDTO()
    {
        public string SupplierHandle { get; set; }
        public string CertificateTypeHandle { get; set; }
        public string ValidFrom { get; set; }
        public string ValidTo { get; set; }
        public byte[] Document { get; set; }
    }

    public class UpdateCertificateDTO
    {
        public string SupplierHandle { get; set; }
        public string CertificateTypeHandle { get; set; }
        public string ValidFrom { get; set; }
        public string ValidTo { get; set; }
        public byte[] Document { get; set; }
        public ICollection<UserDTO> Participants { get; set; }
    }

}
