using System.ComponentModel.DataAnnotations;

namespace CertificatesManagerApi.Entities;

public partial class CertificateUser
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public int? CertificateId { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    [Timestamp]
    public byte[]? RowVersion { get; set; }

    public virtual Certificate? Certificate { get; set; }

    public virtual User? User { get; set; }
}
