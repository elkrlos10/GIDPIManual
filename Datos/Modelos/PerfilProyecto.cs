using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;

namespace Datos.Modelos
{
    [Table("PerfilProyecto")]
    public partial class PerfilProyecto 
    {

        [Key]
        public int idPerfilProyecto { get; set; }
                   
        public int IdProyecto { get; set; }

        public string NombreProyecto { get; set; }

        public string NombreArea { get; set; }

        public string NumeroProyecto { get; set; }

        public string Justificacion { get; set; }
    }
}
