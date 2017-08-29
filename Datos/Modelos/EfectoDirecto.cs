namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("EfectoDirecto")]
    public partial class EfectoDirecto
    {
    

        [Key]
        public int IdEfecto { get; set; }

        public int? IdArbolProblema { get; set; }

        [Required]
        [StringLength(100)]
        public string Efecto { get; set; }

       
    }
}
