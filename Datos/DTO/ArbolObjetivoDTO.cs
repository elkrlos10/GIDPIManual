using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.DTO
{
    public class ArbolObjetivoDTO
    {

        public int IdProyecto { get; set; }

        public string ObjetivoCentral { get; set; }

        public List<Medios> Medios { get; set; }
        public List<Fines> Fines { get; set; }
    }
}
public class Medios
{
    public string Medio { get; set; }

    public List<string> MediosIndirectos { get; set; }
}

public class Fines
{
    public string fin { get; set; }

    public List<string> FinesIndirectos { get; set; }
}