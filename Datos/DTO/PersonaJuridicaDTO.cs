using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.DTO
{
    public class PersonaJuridicaDTO
    {
        public int IdPersonaJuridica { get; set; }
        public string RazonSocial { get; set; }
        public string Nit { get; set; }
        public string SectorEconomico { get; set; }
        public string Responsable { get; set; }
        public string Telefono { get; set; }
        public int IdUsuario { get; set; }

        public string Email { get; set; }
        public string Usuario { get; set; }

        public string Contrasena { get; set; }
    }
}
