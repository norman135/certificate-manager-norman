using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Repository;

namespace CertificatesManagerApi.Services
{
    public class CommentService
    {
        CommentRepository _commentRepository;

        public CommentService(CommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }

        public async Task<ICollection<CommentDTO>> GetComments()
        {
            return await _commentRepository.GetComments();
        }

        public async Task<CommentDTO> AddComment(CreateCommentDTO commentDTO, string handle)
        {
            Guid certificateHandle = Guid.Parse(handle);
            CommentDTO comment = await _commentRepository.AddComment(commentDTO, certificateHandle);

            return comment;
        }
    }
}
