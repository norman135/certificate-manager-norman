using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Mappers
{
    public class UserMapper
    {
        public static UserDTO ToDto(User user)
        {
            UserDTO userDto = new(
                user.Handle,
                user.Name,
                user.FirstName,
                user.Email,
                user.UserId,
                user.Department,
                user.Plant
            );

            return userDto;
        }
    }
}
