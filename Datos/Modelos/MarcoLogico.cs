using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;

namespace Datos.Modelos
{
    [Table("MarcoLogico")]
    public partial class MarcoLogico
    {
        [Key]
        public int IdMarco { get; set; }
        public int IdProyecto { get; set; }
        public string Actividad1 { get; set; }
        public string Actividad2 { get; set; }
        public string Actividad3 { get; set; }
        public string Actividad4 { get; set; }
        public string Resultado1 { get; set; }
        public string Resultado2 { get; set; }
        public string Resultado3 { get; set; }
        public string Resultado4 { get; set; }
        public string Proposito1 { get; set; }
        public string Proposito2 { get; set; }
        public string Proposito3 { get; set; }
        public string Proposito4 { get; set; }
        public string Fin1 { get; set; }
        public string Fin2 { get; set; }
        public string Fin3 { get; set; }
        public string Fin4 { get; set; }

    }
}
