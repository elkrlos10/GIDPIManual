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



        public string ConsutarEmail(string correo)
        {
            Model1 entity = new Model1();
            var emailN = (from i in entity.PersonaNatural
                         where i.Email == correo
                         select i).FirstOrDefault();

            var mensaje = "este correo no esta registrado";

            if (emailN == null )
            {
                var emailJ = (from i in entity.PersonaJuridica
                              where i.Email == correo
                              select i).FirstOrDefault();
                if (emailJ != null)
                {
                    mensaje = "su contraseña fue enviada " + emailJ.Email;
                }
                
            }
            else
            {
                mensaje = "su contraseña fue enviada " + emailN.Email;
            }

            return mensaje;



        }
    }
}
