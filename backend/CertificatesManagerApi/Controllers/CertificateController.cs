using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CertificatesManagerApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CertificateController : ControllerBase
    {
        private readonly CertificateManagerContext _context;
        public CertificateController(CertificateManagerContext context)
        {
            _context = context;
        }

        [HttpGet("/certificates")]
        public ActionResult GetCertificates()
        {
            ICollection<CertificatesDTO> certificatesDtos = _context.Certificates
                .Select(certificate => CertificateService.CertificatesToDto(certificate))
                .ToList();

            return Ok(certificatesDtos);
        }

        [HttpGet("/certificates/{id}")]
        public ActionResult GetCertificate(int id)
        {
            var certificate = _context.Certificates
                .Where(certificate => certificate.Id == id)
                .FirstOrDefault();

            if (certificate == null)
            {
                return NotFound();
            }

            var certificateDto = CertificateService.CertificateToDto(certificate);

            return Ok(certificateDto);
        }

        [HttpGet("/suppliers")]
        public ActionResult GetSuppliers()
        {
            var suppliers = _context.Suppliers
                .Select(supplier => SupplierService.SupplierToDto(supplier))
                .ToList();

            if (suppliers.Count != 0)
            {
                return Ok(suppliers);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet("/users")]
        public ActionResult GetUsers()
        {
            var users = _context.Users
                .Select(user => UserService.UserToDto(user))
                .ToList();

            if (users.Count != 0)
            {
                return Ok(users);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet("/certificate-types")]
        public ActionResult GetCertificateTypes()
        {
            var certificateTypes = _context.CertificateTypes
                .Select(certificateType => CertificateTypeService.CertificateTypeToDto(certificateType))
                .ToList();

            if (certificateTypes.Count != 0)
            {
                return Ok(certificateTypes);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
