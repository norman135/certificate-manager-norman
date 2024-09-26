using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Mappers;
using Microsoft.EntityFrameworkCore;

namespace CertificatesManagerApi.Repository
{
    public class CommentRepository
    {
        private readonly CertificateManagerContext _context;

        public CommentRepository(CertificateManagerContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<CommentDTO>> GetComments()
        {
            return await _context.Comments.Select(comment => CommentMapper.ToDto(comment)).ToListAsync();
        }
    }
}
