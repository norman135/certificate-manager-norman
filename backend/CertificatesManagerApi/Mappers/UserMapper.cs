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

        public static User ToEntity(UserDTO userDTO)
        {
            return new()
            {
                Handle = userDTO.Handle,
                Name = userDTO.Name,
                FirstName = userDTO.FirstName,
                Email = userDTO.Email,
                UserId = userDTO.UserId,
                Department = userDTO.Department,
                Plant = userDTO.Plant
            };
        }
    }
}
