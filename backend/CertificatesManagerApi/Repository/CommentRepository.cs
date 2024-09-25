using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Mappers;

namespace CertificatesManagerApi.Repository
{
    public class CommentRepository
    {
        private readonly CertificateManagerContext _context;

        public CommentRepository(CertificateManagerContext context)
        {
            _context = context;
        }

        public IEnumerable<CommentDTO> GetComments()
        {
            return _context.Comments.Select(comment => CommentMapper.CommentToDto(comment)).ToList();
        }
    }
}
