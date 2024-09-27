namespace CertificatesManagerApi.DTOs
{
    public class SupplierDTO(Guid handle, string name, int index, string city)
    {
        public Guid Handle { get; set; } = handle;
        public string Name { get; set; } = name;
        public int Index { get; set; } = index;
        public string City { get; set; } = city;
    }
}
