using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CertificatesManagerApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SupplierController : ControllerBase
    {
        private readonly SupplierService _supplierService;

        public SupplierController(SupplierService supplierService)
        {
            _supplierService = supplierService;
        }

        [HttpGet("/suppliers")]
        public async Task<IActionResult> GetSuppliers()
        {
            IEnumerable<SupplierDTO> supplierDto = await _supplierService.GetSuppliers();
            return Ok(supplierDto);
        }
    }
}
