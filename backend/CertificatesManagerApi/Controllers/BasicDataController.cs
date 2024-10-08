using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.SearchParameters;
using CertificatesManagerApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CertificatesManagerApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BasicDataController(
        UserService userService,
        SupplierService supplierService,
        CertificateTypeService certificateTypeService
        ) : ControllerBase
    {
        private readonly UserService _userService = userService;
        private readonly SupplierService _supplierService = supplierService;
        private readonly CertificateTypeService _certificateTypeService = certificateTypeService;

        [HttpGet("/users")]
        [ProducesResponseType(typeof(List<UserDTO>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetUsers([FromQuery] UserSearchParameters searchParameters)
        {
            try
            {
                var userDto = await _userService.GetUsers(searchParameters);

                return Ok(userDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("/suppliers")]
        [ProducesResponseType(typeof(List<SupplierDTO>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetSuppliers([FromQuery] SupplierSearchParameters searchParameters)
        {
            try
            {
                var supplierDto = await _supplierService.GetSuppliers(searchParameters);

                return Ok(supplierDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("/certificates/types")]
        [ProducesResponseType(typeof(List<CertificateTypeDTO>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetCertificateTypes()
        {
            try
            {
                var certificateTypeDto = await _certificateTypeService.GetCertificateTypes();

                return Ok(certificateTypeDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
