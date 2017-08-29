using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.DTO
{
    public class PersonaNaturalDTO
    {
        public int IdPersonaNatural { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string Documento { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }

        public string Usuario { get; set; }

        public string Contrasena { get; set; }

    }
}
