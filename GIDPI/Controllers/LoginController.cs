using Datos.DTO;
using Datos.Modelos;
using LogicaNegocio.LogicaNegocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace GIDPI.Controllers
{
    public class LoginController: ApiController
    {

        [HttpPost]
        public IHttpActionResult RegistrarPersonaNatural(PersonaNaturalDTO oPersonaDTO) {

            try
            {
                PersonaNaturalBl personaNatural = new PersonaNaturalBl();
                PersonaNatural oPersona = new PersonaNatural();
                Usuario oUsuario = new Usuario();

                oPersona.Nombres = oPersonaDTO.Nombre;
                oPersona.Apellidos = oPersonaDTO.Apellidos;
                oPersona.Documento = oPersonaDTO.Documento;
                oPersona.Email = oPersonaDTO.Email;
                oPersona.Telefono = oPersonaDTO.Telefono;

                oUsuario.Usuario1 = oPersonaDTO.Usuario;
                oUsuario.Contrasena = oPersonaDTO.Contrasena;
                oUsuario.TipoUsuario = 1;

                var mensaje =  personaNatural.Registrar(oPersona, oUsuario);

                return Ok(new { success = true, mensaje });
            }
            catch (Exception exc)
            {

                return Ok(new { success = false });
            }

            
        }


        [HttpPost]
        public IHttpActionResult RegistroPersonaJuridica(PersonaJuridicaDTO oPersonaDTO)
        {

            try
            {
                PersonaNaturalBl personaNatural = new PersonaNaturalBl();
                PersonaJuridica oPersona = new PersonaJuridica();
                Usuario oUsuario = new Usuario();

                oPersona.RazonSocial = oPersonaDTO.RazonSocial;
                oPersona.NIt = oPersonaDTO.Nit;
                oPersona.SectorEconomico = oPersonaDTO.SectorEconomico;
                oPersona.Responsable = oPersonaDTO.Responsable;
                oPersona.Email = oPersonaDTO.Email;
                oPersona.Telefono = oPersonaDTO.Telefono;

                oUsuario.Usuario1 = oPersonaDTO.Usuario;
                oUsuario.Contrasena = oPersonaDTO.Contrasena;
                oUsuario.TipoUsuario = 2;

                var mensaje = personaNatural.RegistrarPersonaJuridica(oPersona, oUsuario);

                return Ok(new { success = true, mensaje });
            }
            catch (Exception exc)
            {

                return Ok(new { success = false });
            }


        }


        [HttpPost]
        public IHttpActionResult ConsultarUsuario(Usuario oUsuario)
        {
            try
            {

                UsuarioBl oUsuarioBl = new UsuarioBl();
                var usuario = oUsuarioBl.ConsutarUsuario(oUsuario);


                return Ok(new { success = true, usuario});
            }
            catch (Exception e)
            {

                return Ok(new { success = false });
            }
           
        }
    }
}