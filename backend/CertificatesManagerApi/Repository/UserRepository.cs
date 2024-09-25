using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Mappers;

namespace CertificatesManagerApi.Repository
{
    public class UserRepository
    {
        private readonly CertificateManagerContext _context;

        public UserRepository(CertificateManagerContext context)
        {
            _context = context;
        }

        public IEnumerable<UserDTO> GetUsers()
        {
            return _context.Users.Select(user => UserMapper.UserToDto(user)).ToList();
        }
    }
}
