using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;



namespace Datos.Modelos
{
   public partial class Cronograma
    {

        [Key]
        public int IdCronograma { get; set; }

        public int IdProyecto { get; set; }

        public string Actividad { get; set; }

        public string FechaInicio { get; set; }

        public string FechaFin { get; set; }
    }
}
