namespace CertificatesManagerApi.DTOs
{
    public class SupplierDTO()
    {
        public Guid Handle { get; set; }
        public string Name { get; set; }
        public int Index { get; set; }
        public string City { get; set; }
    }

    public class CreateSupplierDTO()
    {
        public string Name { get; set; }
        public int Index { get; set; }
        public string City { get; set; }
    }
}