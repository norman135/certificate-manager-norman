using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Mappers;
using CertificatesManagerApi.SearchParameters;
using CertificatesManagerApi.Utils;
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

        public async Task<IEnumerable<SupplierDTO>> GetSuppliers(SupplierSearchParameters searchParameters)
        {
            var query = Filter.FilterSupplier(_context.Suppliers.AsQueryable(), searchParameters);

            var supplierDtos = await query
                .Select(supplier => SupplierMapper.ToDto(supplier))
                .ToListAsync();

            return supplierDtos;
        }
    }
}
