using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Repository;
using CertificatesManagerApi.SearchParameters;

namespace CertificatesManagerApi.Services
{
    public class UserService
    {
        UserRepository _userRepository;

        public UserService(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<IEnumerable<UserDTO>> GetUsers(UserSearchParameters searchParameters)
        {
            return await _userRepository.GetUsers(searchParameters);
        }
    }
}
