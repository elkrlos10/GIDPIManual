using Datos;
using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class PersonaNaturalBl
    {
        public string Registrar(PersonaNatural oPersona, Usuario oUsuario)
        {
            Model1 entity = new Model1();
            var mensaje = "";
            var usuario = (from i in entity.Usuario
                           where i.Usuario1 == oUsuario.Usuario1
                           select i).FirstOrDefault();

            if (usuario == null)
            {
                entity.Usuario.Add(oUsuario);
                entity.SaveChanges();

                var usuarioR = (from i in entity.Usuario
                               where i.Usuario1 == oUsuario.Usuario1
                               select i).FirstOrDefault();

                oPersona.IdUsuario = usuarioR.IdUsuario;
                entity.PersonaNatural.Add(oPersona);
                entity.SaveChanges();

                mensaje = "Registro Exitoso.";
            }
            else
            {
                mensaje = "El Usuario ya exite.";
            }

            return mensaje;
        }

        public string RegistrarPersonaJuridica(PersonaJuridica oPersona, Usuario oUsuario)
        {
            Model1 entity = new Model1();
            var mensaje = "";
            var usuario = (from i in entity.Usuario
                           where i.Usuario1 == oUsuario.Usuario1
                           select i).FirstOrDefault();

            if (usuario == null)
            {
                entity.Usuario.Add(oUsuario);
                entity.SaveChanges();

                var usuarioR = (from i in entity.Usuario
                                where i.Usuario1 == oUsuario.Usuario1
                                select i).FirstOrDefault();

                oPersona.IdUsuario = usuarioR.IdUsuario;
                entity.PersonaJuridica.Add(oPersona);
                entity.SaveChanges();

                mensaje = "Registro Exitoso.";
            }
            else
            {
                mensaje = "El Usuario ya exite.";
            }

            return mensaje;
        }
    }
}
