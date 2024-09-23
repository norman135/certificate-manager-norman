using System.ComponentModel.DataAnnotations;

namespace CertificatesManagerApi.Models;

public partial class Supplier
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int Index { get; set; }

    public string City { get; set; } = null!;

    public DateTime? Createdat { get; set; }

    public DateTime? Updatedat { get; set; }

    [Timestamp]
    public byte[]? Rowversion { get; set; }

    public virtual ICollection<Certificate> Certificates { get; set; } = new List<Certificate>();
}
