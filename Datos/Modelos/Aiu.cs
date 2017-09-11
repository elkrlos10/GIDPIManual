using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;


namespace Datos.Modelos
{

    [Table("Aiu")]
    public partial class Aiu
    {
        [Key]
        public int IdAIU { get; set; }

        public int IdProyecto { get; set; }

        public double Iva { get; set; }

        public double A { get; set; }

        public double I { get; set; }

        public double U { get; set; }

        public double ValorTotal { get; set; }

    }
}
