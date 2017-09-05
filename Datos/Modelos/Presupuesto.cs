using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;


namespace Datos.Modelos
{
    [Table("Presupuesto")]
    public partial class Presupuesto
    {

        [Key]
        public int IdPresupuesto { get; set; }

        public int IdProyecto { get; set; }
        public string Item { get; set; }

        public string Concepto { get; set; }

        public string Descripcion { get; set; }

        public string Unidad { get; set; }

        public decimal Cantidad { get; set; }

        public decimal ValorUnitario { get; set; }
    }
}
