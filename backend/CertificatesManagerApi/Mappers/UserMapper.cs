using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Mappers
{
    public class UserMapper
    {
        public static UserDTO ToDto(User user)
        {
            UserDTO userDto = new()
            {
                Handle = user.Handle,
                Name = user.Name,
                FirstName = user.FirstName,
                Email = user.Email,
                UserId = user.UserId,
                Department = user.Department,
                Plant = user.Plant
            };

            return userDto;
        }
    }
}
