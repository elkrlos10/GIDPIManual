using Datos;
using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class UsuarioBl
    {
        public Usuario ConsutarUsuario(Usuario oUsuario)
        {
            Model1 entity = new Model1();
            var usuario = (from i in entity.Usuario
                           where i.Usuario1 == oUsuario.Usuario1
                           && i.Contrasena == oUsuario.Contrasena
                           select i).FirstOrDefault();
            return usuario;
        }
    }
}
