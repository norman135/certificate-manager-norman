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

        public IEnumerable<SupplierDTO> GetSuppliers()
        {
            return _supplierRepository.GetSuppliers();
        }
    }
}
