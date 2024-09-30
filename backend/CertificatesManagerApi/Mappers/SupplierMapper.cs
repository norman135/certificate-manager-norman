using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Mappers
{
    public class SupplierMapper
    {
        public static SupplierDTO ToDto(Supplier supplier)
        {
            SupplierDTO supplierDTO = new()
            {
                Handle = supplier.Handle,
                Name = supplier.Name,
                Index = supplier.Index,
                City = supplier.City
            };

            return supplierDTO;
        }

        public static Supplier ToEntity(SupplierDTO supplierDTO)
        {
            Supplier supplier = new()
            {
                Handle = supplierDTO.Handle,
                Name = supplierDTO.Name,
                Index = supplierDTO.Index,
                City = supplierDTO.City
            };

            return supplier;
        }
    }
}
