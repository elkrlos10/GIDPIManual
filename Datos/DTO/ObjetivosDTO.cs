using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.DTO
{
    public class ObjetivosDTO
    {
        public int IdProyecto { get; set; }
        public string ObjetivoCentral { get; set; }
        public List<ObjetivosEspe> Objetivos { get; set; }

    
    }

    public class ObjetivosEspe
    {
        public int IdObjetivoGeneral { get; set; }
        public string ObjetivoEsp { get; set; }

        public string Resultado1 { get; set; }
        public string MedidaResultado { get; set; }

        public string HerramientaResultado { get; set; }
        public string ProductoResultado { get; set; }
    }
}

