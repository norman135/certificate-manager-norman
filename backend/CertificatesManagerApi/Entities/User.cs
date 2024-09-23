using System.ComponentModel.DataAnnotations;

namespace CertificatesManagerApi.Entities;

public partial class User
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string UserId { get; set; } = null!;

    public string Department { get; set; } = null!;

    public string Plant { get; set; } = null!;

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    [Timestamp]
    public byte[]? RowVersion { get; set; }

    public virtual ICollection<CertificateUser> CertificateUsers { get; set; } = new List<CertificateUser>();

    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();
}
