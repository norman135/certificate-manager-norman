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
        public async Task<IActionResult> GetSuppliers([FromQuery] string? name, [FromQuery] int? index, [FromQuery] string? city)
        {
            var supplierDto = await _supplierService.GetSuppliers(name, index, city);
            return Ok(supplierDto);
        }
    }
}
