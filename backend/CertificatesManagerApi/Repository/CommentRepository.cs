using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;
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

        public async Task<ICollection<CommentDTO>> GetComments()
        {
            return await _context
                .Comments
                .Include(c => c.User)
                .Include(c => c.Certificate)
                .Select(c => CommentMapper.ToDto(c))
                .ToListAsync();
        }

        public async Task<CommentDTO> AddComment(CreateCommentDTO createCommentDTO, Guid certificateHandle)
        {
            Certificate commentCertificate = await _context
                .Certificates
                .FirstOrDefaultAsync(c => c.Handle == certificateHandle);

            User commentUser = await _context
                .Users
                .FirstOrDefaultAsync(u => u.Handle == Guid.Parse(createCommentDTO.UserHandle));

            Comment comment = CommentMapper.ToEntity(createCommentDTO, commentCertificate, commentUser);

            _context.Certificates.Attach(commentCertificate);
            _context.Users.Attach(commentUser);

            await _context.Comments.AddAsync(comment);
            await _context.SaveChangesAsync();

            return CommentMapper.ToDto(comment);
        }
    }
}
