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
        private readonly CommentService _commentService;

        public CertificateController(CertificateService certificateService, CommentService commentService)
        {
            _certificateService = certificateService;
            _commentService = commentService;
        }

        [HttpGet("/certificates")]
        public async Task<ActionResult> GetTableCertificates()
        {
            var certificatesDtos = await _certificateService.GetTableCertificates();

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

        [HttpPost("/certificates/{handle}/comments")]
        public async Task<IActionResult> AddComment([FromBody] CreateCommentDTO createCommentDTO, string handle)
        {
            var comment = await _commentService.AddComment(createCommentDTO, handle);

            return Ok(comment);
        }

        [HttpPut("/certificates/{handle}")]
        public async Task<ActionResult> UpdateCertificate([FromBody] UpdateCertificateDTO updateCertificateDTO, string handle)
        {
            var certificateDto = await _certificateService.UpdateCertificate(handle, updateCertificateDTO);

            return Ok(certificateDto);
        }

        [HttpDelete("/certificates/{handle}")]
        public async Task<ActionResult> DeleteCertificate(string handle)
        {
            bool result = await _certificateService.DeleteCertificate(handle);

            if (result)
            {
                return NoContent();
            }
            else
            {
                return StatusCode(500, "An error occured while attempting to delete.");
            }
        }
    }
}
