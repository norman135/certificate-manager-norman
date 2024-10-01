using CertificatesManagerApi.DTOs;
using CertificatesManagerApi.Entities;

namespace CertificatesManagerApi.Mappers
{
    public class CommentMapper
    {
        public static CommentDTO ToDto(Comment comment)
        {
            CommentDTO commentDto = new()
            {
                UserName = comment.User.Name,
                Comment = comment.CommentText
            };

            return commentDto;
        }

        public static Comment ToEntity(CreateCommentDTO createCommentDTO, Certificate commentCertificate, User commentUser)
        {
            Comment comment = new()
            {
                CommentText = createCommentDTO.CommentText,
                Certificate = commentCertificate,
                User = commentUser
            };

            return comment;
        }
    }
}
