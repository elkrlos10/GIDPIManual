namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class MediosIndirectos
    {
        [Key]
        public int IdMedioIndirecto { get; set; }

        public int IdMedio { get; set; }

        [Required]
        [StringLength(100)]
        public string MedioIndirecto { get; set; }

    
    }
}
