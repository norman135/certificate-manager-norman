namespace CertificatesManagerApi.DTOs
{
    public class CertificatesDTO(Guid handle, SupplierDTO supplier, string type, DateTime validFrom, DateTime validTo)
    {
        public Guid Handle { get; set; } = handle;
        public string Supplier { get; set; } = $"{supplier.Name}, {supplier.Index}, {supplier.City}";
        public string CertificateType { get; set; } = type;
        public DateTime ValidFrom { get; set; } = validFrom;
        public DateTime ValidTo { get; set; } = validTo;

    }
}
