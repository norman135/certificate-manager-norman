namespace CertificatesManagerApi.DTOs
{
    public class CommentDTO(string name, string comment)
    {
        public string UserName { get; set; } = name;
        public string Comment { get; set; } = comment;
    }

    public class CreateCommentDTO(string certificateHandle, string userHandle, string comment)
    {
        public string CertificateHandle { get; set; } = certificateHandle;
        public string UserHandle { get; set; } = userHandle;
        public string CommentText { get; set; } = comment;
    }
}
