using System.ComponentModel.DataAnnotations;

namespace CertificatesManagerApi.Models;

public partial class User
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Firstname { get; set; } = null!;

    public string Userid { get; set; } = null!;

    public string Department { get; set; } = null!;

    public string Plant { get; set; } = null!;

    public DateTime? Createdat { get; set; }

    public DateTime? Updatedat { get; set; }

    [Timestamp]
    public byte[]? Rowversion { get; set; }

    public virtual ICollection<CertificateUser> CertificateUsers { get; set; } = new List<CertificateUser>();

    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();
}
