namespace CertificatesManagerApi.DTOs
{
    public class CertificatesDTO(Guid handle, SupplierDTO supplier, string type, string validFrom, string validTo)
    {
        public Guid Handle { get; set; } = handle;
        public string Supplier { get; set; } = $"{supplier.Name}, {supplier.Index}, {supplier.City}";
        public string CertificateType { get; set; } = type;
        public string ValidFrom { get; set; } = validFrom;
        public string ValidTo { get; set; } = validTo;

    }
}