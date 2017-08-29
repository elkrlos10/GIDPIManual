namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ObjetivoGeneral")]
    public partial class ObjetivoGeneral
    {
      

        [Key]
        public int IdObjetivoGeneral { get; set; }

        public int IdProyecto { get; set; }

        [StringLength(200)]
        public string ObjetivoCentral { get; set; }

    }
}
