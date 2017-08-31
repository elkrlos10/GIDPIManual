using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.DTO
{
    public class ProyectoDTO
    {
        public int IdProyecto { get; set; }
     
        public string TipoProyecto { get; set; }

        public string AccionProyecto { get; set; }

        public int IdMunicipio { get; set; }
        public string municipio { get; set; }

        public string Sector { get; set; }

        public string TemaProyecto { get; set; }

        public int IdUsuario { get; set; }
        public string usuario { get; set; }

        public int Etapa { get; set; }

        public string NombreProyecto { get; set; }
    }
}
