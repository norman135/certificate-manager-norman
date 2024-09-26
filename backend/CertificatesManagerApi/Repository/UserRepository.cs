using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Mappers;
using Microsoft.EntityFrameworkCore;

namespace CertificatesManagerApi.Repository
{
    public class UserRepository
    {
        private readonly CertificateManagerContext _context;

        public UserRepository(CertificateManagerContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<UserDTO>> GetUsers()
        {
            return await _context.Users.Select(user => UserMapper.ToDto(user)).ToListAsync();
        }
    }
}
