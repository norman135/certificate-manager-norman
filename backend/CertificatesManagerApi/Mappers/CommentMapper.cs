using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Mappers
{
    public class CommentMapper
    {
        public static CommentDTO ToDto(Comment comment)
        {
            CommentDTO commentDto = new(comment.User.Name, comment.CommentText);

            return commentDto;
        }
    }
}
