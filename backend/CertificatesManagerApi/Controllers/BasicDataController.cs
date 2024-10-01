using CertificatesManagerApi.SearchParameters;
using CertificatesManagerApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CertificatesManagerApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BasicDataController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly SupplierService _supplierService;
        private readonly CertificateTypeService _certificateTypeService;

        public BasicDataController(
            UserService userService,
            SupplierService supplierService,
            CertificateTypeService certificateTypeService
        )
        {
            _userService = userService;
            _supplierService = supplierService;
            _certificateTypeService = certificateTypeService;
        }

        [HttpGet("/users")]
        public async Task<IActionResult> GetUsers([FromQuery] UserSearchParameters searchParameters)
        {
            var userDto = await _userService.GetUsers(searchParameters);
            return Ok(userDto);
        }

        [HttpGet("/suppliers")]
        public async Task<IActionResult> GetSuppliers([FromQuery] SupplierSearchParameters searchParameters)
        {
            var supplierDto = await _supplierService.GetSuppliers(searchParameters);
            return Ok(supplierDto);
        }

        [HttpGet("/certificates/types")]
        public async Task<IActionResult> GetCertificateTypes()
        {
            var certificateTypeDto = await _certificateTypeService.GetCertificateTypes();
            return Ok(certificateTypeDto);
        }
    }
}
