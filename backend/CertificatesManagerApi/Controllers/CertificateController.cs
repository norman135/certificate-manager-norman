using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CertificatesManagerApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CertificateController(
        CertificateService certificateService,
        CommentService commentService
    ) : ControllerBase
    {
        private readonly CertificateService _certificateService = certificateService;
        private readonly CommentService _commentService = commentService;


        [HttpGet("/certificates")]
        public async Task<ActionResult> GetTableCertificates()
        {
            try
            {
                var certificatesDtos = await _certificateService.GetTableCertificates();

                return Ok(certificatesDtos);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

        }

        [HttpGet("/certificates/{handle}")]
        public async Task<ActionResult> GetCertificate(string handle)
        {
            try
            {
                var certificateDto = await _certificateService.GetCertificate(handle);

                return Ok(certificateDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("/certificates")]
        public async Task<ActionResult> PostCertificate([FromBody] CreateCertificateDTO createCertificateDto)
        {
            try
            {
                var certificateDto = await _certificateService.PostCertificate(createCertificateDto);

                return Created($"/certificates/{certificateDto.Handle}", certificateDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost("/certificates/{handle}/comments")]
        public async Task<IActionResult> AddComment([FromBody] CreateCommentDTO createCommentDTO, string handle)
        {
            try
            {
                var comment = await _commentService.AddComment(createCommentDTO, handle);

                return Ok(comment);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut("/certificates/{handle}")]
        public async Task<ActionResult> UpdateCertificate([FromBody] UpdateCertificateDTO updateCertificateDTO, string handle)
        {
            try
            {
                var certificateDto = await _certificateService.UpdateCertificate(handle, updateCertificateDTO);

                return Ok(certificateDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("/certificates/{handle}")]
        public async Task<ActionResult> DeleteCertificate(string handle)
        {
            try
            {
                await _certificateService.DeleteCertificate(handle);

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
