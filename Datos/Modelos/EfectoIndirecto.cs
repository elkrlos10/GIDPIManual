namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("EfectoIndirecto")]
    public partial class EfectoIndirecto
    {
        [Key]
        public int IdEfectoIndirecto { get; set; }

        public int IdEfecto { get; set; }

        public string EfectoIndirecto1 { get; set; }

   
    }
}
