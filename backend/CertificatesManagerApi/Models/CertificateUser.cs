﻿using System;
using System.Collections.Generic;

namespace CertificatesManagerApi.Models;

public partial class CertificateUser
{
    public int Id { get; set; }

    public int? Userid { get; set; }

    public int? Certificateid { get; set; }

    public DateTime? Createdat { get; set; }

    public DateTime? Updatedat { get; set; }

    public byte[]? Rowversion { get; set; }

    public virtual Certificate? Certificate { get; set; }

    public virtual User? User { get; set; }
}
