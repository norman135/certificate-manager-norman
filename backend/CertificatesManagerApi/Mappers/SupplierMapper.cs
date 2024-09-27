using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Mappers
{
    public class SupplierMapper
    {
        public static SupplierDTO ToDto(Supplier supplier)
        {
            SupplierDTO supplierDTO = new(supplier.Handle, supplier.Name, supplier.Index, supplier.City);
            return supplierDTO;
        }

        public static Supplier ToEntity(SupplierDTO supplierDTO)
        {
            Supplier supplier = new();

            supplier.Handle = supplierDTO.Handle;
            supplier.Name = supplierDTO.Name;
            supplier.Index = supplierDTO.Index;
            supplier.City = supplierDTO.City;

            return supplier;
        }
    }
}
