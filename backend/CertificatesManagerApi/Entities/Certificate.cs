namespace CertificatesManagerApi.Entities;

public partial class Certificate
{
    public int Id { get; set; }

    public Guid Handle { get; set; }

    public int? SupplierId { get; set; }

    public int? TypeId { get; set; }

    public DateTime ValidFrom { get; set; }

    public DateTime ValidTo { get; set; }

    public byte[]? CertificateDocument { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public byte[]? RowVersion { get; set; }

    public virtual ICollection<CertificateUser> CertificateUsers { get; set; } = new List<CertificateUser>();

    public virtual ICollection<Comment> Comments { get; set; } = new List<Comment>();

    public virtual Supplier? Supplier { get; set; }

    public virtual CertificateType? Type { get; set; }
}
