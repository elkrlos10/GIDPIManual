using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.DTO
{
    public class ArbolProblemaDTO
    {

        public int IdProyecto { get; set; }

        public string ProblemaCentral { get; set; }

        public string imagen { get; set; }

        public List<Causas> Causas { get; set; }
        public List<Efectos> Efectos { get; set; }
    }

    public class Causas
    {
        public string Causa { get; set; }

        public List<string> CausaIndirecta { get; set; }
    }

    public class Efectos
    {
        public string Efecto { get; set; }

        public List<string> EfectoIndirecta { get; set; }
    }
}
