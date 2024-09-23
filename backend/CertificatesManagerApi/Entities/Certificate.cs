using System.ComponentModel.DataAnnotations;

namespace CertificatesManagerApi.Entities;

public partial class Certificate
{
    public int Id { get; set; }

    public int? Supplierid { get; set; }

    public int? Typeid { get; set; }

    public DateTime Validfrom { get; set; }

    public DateTime Validto { get; set; }

    public byte[]? Certificate1 { get; set; }

    public DateTime? Createdat { get; set; }

    public DateTime? Updatedat { get; set; }

    public virtual ICollection<CertificateUser> CertificateUsers { get; set; } = new List<CertificateUser>();

    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();

    public virtual Supplier? Supplier { get; set; }

    public virtual Type? Type { get; set; }

    [Timestamp]
    public byte[]? Rowversion { get; set; }
}
