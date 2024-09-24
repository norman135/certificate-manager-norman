using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Services
{
    public class SupplierService
    {
        public static SupplierDTO SupplierToDto(Supplier supplier)
        {
            SupplierDTO supplierDTO = new(supplier.Name, supplier.Index, supplier.City);
            return supplierDTO;
        }
    }
}
