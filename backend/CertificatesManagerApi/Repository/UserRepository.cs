using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Mappers;
using CertificatesManagerApi.SearchParameters;
using CertificatesManagerApi.Utils;
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

        public async Task<IEnumerable<UserDTO>> GetUsers(UserSearchParameters searchParameters)
        {
            var query = Filter.FilterUser(_context.Users.AsQueryable(), searchParameters);

            return await query.Select(user => UserMapper.ToDto(user)).ToListAsync();
        }
    }
}
