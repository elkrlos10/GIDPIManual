using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;


namespace Datos.Modelos
{
    public partial class Involucrados
    {
        [Key]
        public int IdInvolucrado { get; set; }

        public int IdProyecto { get; set; }

        public string Involucrado { get; set; }

        public string Interes { get; set; }

        public string Problema { get; set; }

        public string Recursos { get; set; }

        public string Estrategia { get; set; }

    }
}
