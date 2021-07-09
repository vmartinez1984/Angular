using System;
using System.ComponentModel.DataAnnotations;

namespace tarjetasApi.Models
{
public class TarjetaDeCredito{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string Titular { get; set; }

    [Required]
    [MaxLength(16)]
    public string NumeroDeTarjeta { get; set; }

    [Required]
    [MaxLength(5)]
    public string FechaDeVencimiento { get; set; }

    [Required]
    [MaxLength(3)]
    public string Cvv { get; set; }

    [Required]
    public DateTime FechaDeRegistro { get; set; } 

    [Required]
    public bool IsActivo { get; set; }
}
}