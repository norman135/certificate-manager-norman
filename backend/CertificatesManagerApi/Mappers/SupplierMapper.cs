using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Mappers
{
    public class SupplierMapper
    {
        public static SupplierDTO ToDto(Supplier supplier)
        {
            SupplierDTO supplierDTO = new(supplier.Name, supplier.Index, supplier.City);
            return supplierDTO;
        }
    }
}
