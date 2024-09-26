using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace CertificatesManagerApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet("/users")]
        public async Task<IActionResult> GetUsers()
        {
            IEnumerable<UserDTO> userDto = await _userService.GetUsers();
            return Ok(userDto);
        }
    }
}
