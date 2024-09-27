using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Mappers;
using Microsoft.EntityFrameworkCore;

namespace CertificatesManagerApi.Repository
{
    public class SupplierRepository
    {
        private readonly CertificateManagerContext _context;

        public SupplierRepository(CertificateManagerContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<SupplierDTO>> GetSuppliers(string? name, int? index, string? city)
        {
            return await _context.Suppliers
                .Select(supplier => SupplierMapper.ToDto(supplier))
                .Where(supplier =>
                    (string.IsNullOrEmpty(name) || supplier.Name.Contains(name)) &&
                    (!index.HasValue || supplier.Index == index) &&
                    (string.IsNullOrEmpty(city) || supplier.City.Contains(city))
                )
                .ToListAsync();
        }
    }
}
