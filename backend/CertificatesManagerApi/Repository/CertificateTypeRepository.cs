using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;

using CertificatesManagerApi.Mappers;
namespace CertificatesManagerApi.Repository
{
    public class CertificateTypeRepository
    {
        private readonly CertificateManagerContext _context;

        public CertificateTypeRepository(CertificateManagerContext context)
        {
            _context = context;
        }

        public IEnumerable<CertificateTypeDTO> GetCertificateTypes()
        {
            return _context.CertificateTypes.Select(type => CertificateTypeMapper.CertificateTypeToDto(type)).ToList();
        }
    }
}
