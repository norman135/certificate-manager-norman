namespace CertificatesManagerApi.Entities;

public partial class Supplier
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int Index { get; set; }

    public string City { get; set; } = null!;

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public byte[]? RowVersion { get; set; }

    public virtual ICollection<Certificate> Certificates { get; set; } = new List<Certificate>();
}
