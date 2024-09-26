using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Mappers;
using Microsoft.EntityFrameworkCore;
namespace CertificatesManagerApi.Repository
{
    public class CertificateTypeRepository
    {
        private readonly CertificateManagerContext _context;

        public CertificateTypeRepository(CertificateManagerContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<CertificateTypeDTO>> GetCertificateTypes()
        {
            return await _context.CertificateTypes.Select(type => CertificateTypeMapper.ToDto(type)).ToListAsync();
        }
    }
}
