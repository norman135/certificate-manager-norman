namespace CertificatesManagerApi.DTOs
{
    public class CertificateTypeDTO(string name)
    {
        public string Name { get; set; } = name;
    }
}
