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

    public class CreateCertificateDTO(string supplierHandle, string certificateTypeHandle, string validFrom, string validTo, byte[] document)
    {
        public string SupplierHandle { get; set; } = supplierHandle;
        public string CertificateTypeHandle { get; set; } = certificateTypeHandle;
        public string ValidFrom { get; set; } = validFrom;
        public string ValidTo { get; set; } = validTo;
        public byte[] Document { get; set; } = document;
    }

    public class UpdateCertificateDTO
    {
        public string SupplierHandle { get; set; }
        public string CertificateTypeHandle { get; set; }
        public string ValidFrom { get; set; }
        public string ValidTo { get; set; }
        public byte[] Document { get; set; }
        public UpdateCertificateDTO() { }

        public UpdateCertificateDTO(string supplierHandle, string certificateTypeHandle, string validFrom, string validTo, byte[] document)
        {
            SupplierHandle = supplierHandle;
            CertificateTypeHandle = certificateTypeHandle;
            ValidFrom = validFrom;
            ValidTo = validTo;
            Document = document;
        }
    }

}
