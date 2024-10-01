namespace CertificatesManagerApi.DTOs
{
    public class CommentDTO()
    {
        public string UserName { get; set; }
        public string Comment { get; set; }
    }

    public class CreateCommentDTO()
    {
        public string UserHandle { get; set; }
        public string CommentText { get; set; }
    }
}
