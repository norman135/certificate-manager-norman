using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Repository;
using CertificatesManagerApi.SearchParameters;

namespace CertificatesManagerApi.Services
{
    public class SupplierService
    {
        SupplierRepository _supplierRepository;

        public SupplierService(SupplierRepository supplierRepository)
        {
            _supplierRepository = supplierRepository;
        }

        public async Task<IEnumerable<SupplierDTO>> GetSuppliers(SupplierSearchParameters searchParameters)
        {
            return await _supplierRepository.GetSuppliers(searchParameters);
        }
    }
}
