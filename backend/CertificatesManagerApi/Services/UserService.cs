using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Repository;

namespace CertificatesManagerApi.Services
{
    public class UserService
    {
        UserRepository _userRepository;

        public UserService(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<IEnumerable<UserDTO>> GetUsers()
        {
            return await _userRepository.GetUsers();
        }
    }
}
