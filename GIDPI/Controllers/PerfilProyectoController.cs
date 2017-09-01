using Datos.Modelos;
using GIDPI.Parametros;
using LogicaNegocio.LogicaNegocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace GIDPI.Controllers
{
    public class PerfilProyectoController:ApiController
    {
        [HttpPost]
        public IHttpActionResult ConsultarProyecto(ParametrosDTO oParametros)
        {
            try
            {
                PerfilProyectoBL oPerfil = new PerfilProyectoBL();
                var Proyecto=oPerfil.ConsultarProyecto(int.Parse(oParametros.Parametro1));

                return Ok(new { success = true, Proyecto });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }

        [HttpPost]
        public IHttpActionResult GuardarPerfilProyecto(PerfilProyecto perfilProyecto)
        {
            try
            {
                PerfilProyectoBL oPerfil = new PerfilProyectoBL();
                oPerfil.GuardarPerfilProyecto(perfilProyecto);

                return Ok(new { success = true });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }

        [HttpPost]
        public IHttpActionResult ConsultarPerfilTerminado(ParametrosDTO oParametros)
        {
            try
            {
                PerfilProyectoBL oPerfil = new PerfilProyectoBL();
               var perfilProyecto= oPerfil.ConsultarPerfilTerminado(int.Parse(oParametros.Parametro1));

                return Ok(new { success = true, perfilProyecto });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }


        [HttpPost]
        public IHttpActionResult EditarPerfilProyecto(PerfilProyecto perfilProyecto)
        {
            try
            {
                PerfilProyectoBL oPerfil = new PerfilProyectoBL();
                oPerfil.EditarPerfilProyecto(perfilProyecto);

                return Ok(new { success = true });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }


        [HttpPost]
        public IHttpActionResult GuardarPerfilProyecto2(Perfil2 Perfil2)
        {
            try
            {
                PerfilProyectoBL oPerfil2 = new PerfilProyectoBL();
                oPerfil2.GuardarPerfilProyecto2(Perfil2);

                return Ok(new { success = true });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }


        [HttpPost]
        public IHttpActionResult ConsultarPerfil2(ParametrosDTO oParametros)
        {
            try
            {
                PerfilProyectoBL oPerfil2 = new PerfilProyectoBL();
                var perfilProyecto2 = oPerfil2.ConsultarPerfil2(int.Parse(oParametros.Parametro1));

                return Ok(new { success = true, perfilProyecto2 });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }
    }
}