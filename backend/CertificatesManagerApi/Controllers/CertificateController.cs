using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CertificatesManagerApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CertificateController : ControllerBase
    {
        private readonly CertificateService _certificateService;

        public CertificateController(CertificateService certificateService)
        {
            _certificateService = certificateService;
        }

        [HttpGet("/certificates")]
        public async Task<ActionResult> GetCertificates()
        {
            var certificatesDtos = await _certificateService.GetCertificates();

            return Ok(certificatesDtos);
        }

        [HttpGet("/certificates/{handle}")]
        public async Task<ActionResult> GetCertificate(string handle)
        {
            var certificateDto = await _certificateService.GetCertificate(handle);

            return Ok(certificateDto);
        }

        [HttpPost("/certificates")]
        public async Task<ActionResult> PostCertificate([FromBody] CreateCertificateDTO createCertificateDto)
        {
            var certificateDto = await _certificateService.PostCertificate(createCertificateDto);

            return Created($"/certificates/{certificateDto.Handle}", certificateDto);
        }

        [HttpPut("/certificates/{handle}")]
        public async Task<ActionResult> UpdateCertificate([FromBody] UpdateCertificateDTO updateCertificateDTO, string handle)
        {
            var certificateDto = await _certificateService.UpdateCertificate(handle, updateCertificateDTO);

            return Ok(certificateDto);
        }
    }
}
