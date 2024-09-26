namespace CertificatesManagerApi.DTOs
{
    public class UserDTO(string name, string firstName, string userId, string department, string plant)
    {
        public string Name { get; set; } = name;
        public string FirstName { get; set; } = firstName;
        public string UserId { get; set; } = userId;
        public string Department { get; set; } = department;
        public string Plant { get; set; } = plant;
    }
}
