using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.DTO
{
    public class MatrizDTO
    {
        public int IdMatriz { get; set; }

        public int IdProyecto { get; set; }

        public string ProblemaGeneral { get; set; }

        public List<DetalleMatriz> DetalleMat {get; set;}
    }
}
