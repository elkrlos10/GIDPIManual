namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class FinesIndirectos
    {
        [Key]
        public int IdFinIndirecto { get; set; }

        public int IdFIn { get; set; }

        [Required]
        [StringLength(140)]
        public string FinIndirecto { get; set; }

    }
}
