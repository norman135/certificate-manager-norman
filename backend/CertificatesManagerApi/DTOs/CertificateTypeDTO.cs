namespace CertificatesManagerApi.DTOs
{
    public class CertificateTypeDTO(Guid handle, string name)
    {
        public Guid Handle { get; set; } = handle;
        public string Name { get; set; } = name;
    }
}
