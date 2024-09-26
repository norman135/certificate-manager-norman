using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CertificatesManagerApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CertificateTypeController : ControllerBase
    {
        private readonly CertificateTypeService _certificateTypeService;

        public CertificateTypeController(CertificateTypeService certificateTypeService)
        {
            _certificateTypeService = certificateTypeService;
        }

        [HttpGet("/certificate-types")]
        public async Task<IActionResult> GetCertificateTypes()
        {
            IEnumerable<CertificateTypeDTO> certificateTypeDto = await _certificateTypeService.GetCertificateTypes();
            return Ok(certificateTypeDto);
        }
    }
}
