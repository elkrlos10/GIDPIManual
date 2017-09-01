using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.Spatial;

namespace Datos.Modelos
{
    public partial class Perfil2
    {
        [Key]
        public int IdPerfilProyecto2 { get; set; }

        public int idProyecto { get; set; }

        public string Planteamiento { get; set; }

        public string Impacto { get; set; }

        public string Poblacion { get; set; }

        public string Variables { get; set; }

        public string Tecnicas { get; set; }

        public string Enfoque { get; set; }

        public string TipoInvestigacion { get; set; }

        public string Metodo { get; set; }

        public string Metodologia { get; set; }

    }
}
