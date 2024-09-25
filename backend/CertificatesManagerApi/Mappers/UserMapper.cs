using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Mappers
{
    public class UserMapper
    {
        public static UserDTO UserToDto(User user)
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
