using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Repository;

namespace CertificatesManagerApi.Services
{
    public class SupplierService
    {
        SupplierRepository _supplierRepository;

        public SupplierService(SupplierRepository supplierRepository)
        {
            _supplierRepository = supplierRepository;
        }

        public async Task<IEnumerable<SupplierDTO>> GetSuppliers(string? name, int? index, string? city)
        {
            return await _supplierRepository.GetSuppliers(name, index, city);
        }
    }
}
