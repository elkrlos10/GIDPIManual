namespace Datos.Modelos
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("DetalleMatriz")]
    public partial class DetalleMatriz
    {
        

        [Key]
        public int IdDetalleMatriz { get; set; }

        public int IdMatriz { get; set; }


        public string Problema { get; set; }

        public int EjeX { get; set; }

        public int? EjeY { get; set; }

        public string Criterio { get; set; }

    }
}
