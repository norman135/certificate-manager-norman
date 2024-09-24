namespace CertificatesManagerApi.DTOs
{
    public class SupplierDTO(string name, int index, string city)
    {
        public string Name { get; set; } = name;
        public int Index { get; set; } = index;
        public string City { get; set; } = city;
    }
}
