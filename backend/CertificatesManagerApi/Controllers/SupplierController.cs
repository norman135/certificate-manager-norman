using CertificatesManagerApi.SearchParameters;
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
        public async Task<IActionResult> GetSuppliers([FromQuery] SupplierSearchParameters searchParameters)
        {
            var supplierDto = await _supplierService.GetSuppliers(searchParameters);
            return Ok(supplierDto);
        }
    }
}
