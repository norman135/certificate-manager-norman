namespace CertificatesManagerApi.DTOs
{
    public class UserDTO()
    {
        public Guid? Handle { get; set; }
        public string Name { get; set; }
        public string FirstName { get; set; }
        public string Email { get; set; }
        public string UserId { get; set; }
        public string Department { get; set; }
        public string Plant { get; set; }
    }
}
