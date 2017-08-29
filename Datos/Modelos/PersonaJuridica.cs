namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("PersonaJuridica")]
    public partial class PersonaJuridica
    {
        [Key]
        public int IdPersonaJuridica { get; set; }

        [Required]
        [StringLength(50)]
        public string NIt { get; set; }

        [Required]
        [StringLength(50)]
        public string RazonSocial { get; set; }

        [Required]
        [StringLength(50)]
        public string SectorEconomico { get; set; }

        [Required]
        [StringLength(50)]
        public string Responsable { get; set; }

        [Required]
        [StringLength(50)]
        public string Email { get; set; }

        [Required]
        [StringLength(50)]
        public string Telefono { get; set; }

        public int IdUsuario { get; set; }

    
    }
}
