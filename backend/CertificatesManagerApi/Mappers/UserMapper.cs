using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Mappers
{
    public class UserMapper
    {
        public static UserDTO ToDto(User user)
        {
            UserDTO userDto = new(
                user.Name,
                user.FirstName,
                user.UserId,
                user.Department,
                user.Plant
            );

            return userDto;
        }
    }
}
