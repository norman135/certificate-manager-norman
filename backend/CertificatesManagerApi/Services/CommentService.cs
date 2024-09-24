using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Services
{
    public class CommentService
    {
        public static CommentDTO CommentToDto(Comment comment)
        {
            CommentDTO commentDto = new(comment.User.Name, comment.CommentText);

            return commentDto;
        }
    }
}
