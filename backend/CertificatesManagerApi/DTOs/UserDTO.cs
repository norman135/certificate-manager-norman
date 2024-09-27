namespace CertificatesManagerApi.DTOs
{
    public class UserDTO(Guid handle, string name, string firstName, string email, string userId, string department, string plant)
    {
        public Guid Handle { get; set; } = handle;
        public string Name { get; set; } = name;
        public string FirstName { get; set; } = firstName;
        public string Email { get; set; } = email;
        public string UserId { get; set; } = userId;
        public string Department { get; set; } = department;
        public string Plant { get; set; } = plant;
    }
}
