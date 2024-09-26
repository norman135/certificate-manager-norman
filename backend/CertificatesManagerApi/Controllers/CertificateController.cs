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
            IEnumerable<CertificatesDTO> certificatesDtos = await _certificateService.GetCertificates();

            return Ok(certificatesDtos);
        }

        [HttpGet("/certificate/{id}")]
        public async Task<ActionResult> GetCertificate(int id)
        {
            CertificateDTO certificateDto = await _certificateService.GetCertificate(id);
            return Ok(certificateDto);
        }
    }
}
