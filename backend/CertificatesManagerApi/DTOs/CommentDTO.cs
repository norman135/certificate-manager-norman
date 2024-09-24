namespace CertificatesManagerApi.DTOs
{
    public class CommentDTO(string name, string comment)
    {
        public string UserName { get; set; } = name;
        public string Comment { get; set; } = comment;
    }
}
