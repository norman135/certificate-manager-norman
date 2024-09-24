using System.ComponentModel.DataAnnotations;

namespace CertificatesManagerApi.Entities;

public partial class Comment
{
    public int Id { get; set; }

    public string CommentText { get; set; } = null!;

    public int? UserId { get; set; }

    public int? CertificateId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    [Timestamp]
    public byte[]? RowVersion { get; set; }

    public virtual Certificate? Certificate { get; set; }

    public virtual User? User { get; set; }
}
