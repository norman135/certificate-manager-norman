using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Mappers;

namespace CertificatesManagerApi.Repository
{
    public class SupplierRepository
    {
        private readonly CertificateManagerContext _context;

        public SupplierRepository(CertificateManagerContext context)
        {
            _context = context;
        }

        public IEnumerable<SupplierDTO> GetSuppliers()
        {
            return _context.Suppliers.Select(supplier => SupplierMapper.SupplierToDto(supplier)).ToList();
        }
    }
}
