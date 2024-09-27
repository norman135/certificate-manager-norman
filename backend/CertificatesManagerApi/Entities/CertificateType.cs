namespace CertificatesManagerApi.Entities;

public partial class CertificateType
{
    public int Id { get; set; }

    public Guid Handle { get; set; }

    public string Type { get; set; } = null!;

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public byte[]? RowVersion { get; set; }

    public virtual ICollection<Certificate> Certificates { get; set; } = new List<Certificate>();
}
