using Datos;
using Datos.Modelos;
using LogicaNegocio.Mail;
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
            var mensaje = "";

            Model1 entity = new Model1();
            var emailN = (from i in entity.PersonaNatural
                         where i.Email == correo
                         select i).FirstOrDefault();


            if (emailN == null )
            {
                var emailJ = (from i in entity.PersonaJuridica
                              where i.Email == correo
                              select i).FirstOrDefault();
                if (emailJ != null)
                {
                    var Usuario = (from i in entity.Usuario
                                  where i.IdUsuario == emailJ.IdUsuario
                                  select i).FirstOrDefault();

                    var Asunto = "Recuperación contraseña";
                    var Plantilla = "Usuario: " + Usuario.Usuario1 + "<br/> Contraseña: " + Usuario.Contrasena;
                    SendMail.SendMailMessage(Asunto, Plantilla, emailJ.Email);

                    mensaje = "Su contraseña fue enviada " + emailJ.Email;
                }
                else
                {
                    mensaje = "El correo ingresado no se encuentra registrado";
                }
                
            }
            else
            {
                var Usuario = (from i in entity.Usuario
                               where i.IdUsuario == emailN.IdUsuario
                               select i).FirstOrDefault();

                var Asunto = "Recuperación contraseña";
                var Plantilla = "Usuario: " + Usuario.Usuario1 + "<br/> Contraseña: " + Usuario.Contrasena;
                SendMail.SendMailMessage(Asunto, Plantilla, emailN.Email);


                mensaje = "Su contraseña fue enviada " + emailN.Email;
            }

            return mensaje;

        }
    }
}
