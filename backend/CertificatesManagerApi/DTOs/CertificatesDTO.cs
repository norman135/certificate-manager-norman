namespace CertificatesManagerApi.DTOs
{
    public class CertificatesDTO(SupplierDTO supplier, string type, DateTime validFrom, DateTime validTo)
    {
        public string Supplier { get; set; } = $"{supplier.Name}, {supplier.Index}, {supplier.City}";
        public string CertificateType { get; set; } = type;
        public DateTime ValidFrom { get; set; } = validFrom;
        public DateTime ValidTo { get; set; } = validTo;

    }
}
