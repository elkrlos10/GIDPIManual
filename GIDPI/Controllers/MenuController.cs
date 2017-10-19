using GIDPI.Parametros;
using LogicaNegocio.LogicaNegocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace GIDPI.Controllers
{
    public class MenuController: ApiController
    {
        [HttpPost]

        public IHttpActionResult ConsultarProyectos(ParametrosDTO oParametros)
        {

            try
            {
                DatosProyectoBl oMenu = new DatosProyectoBl();

                var proyectos = oMenu.ConsultarProyectos(int.Parse(oParametros.Parametro1));

                return Ok(new {success = true, proyectos});
            }
            catch (Exception exc)
            {

                return Ok(new { success = false, exc.Message });
            }
        }

        [HttpPost]

        public IHttpActionResult AbrirProyecto(ParametrosDTO oParametros)
        {

            try
            {
                MenuBl oMenu = new MenuBl();

                var proyecto = oMenu.AbrirProyecto(int.Parse(oParametros.Parametro1));

                return Ok(new { success = true, proyecto });
            }
            catch (Exception)
            {

                return Ok(new { success = false });
            }
        }

        [HttpPost]
        public IHttpActionResult consultarMatriz(ParametrosDTO oParametros)
        {

            try
            {
                MenuBl oMenu = new MenuBl();

                var proyecto = oMenu.consultarMatriz(int.Parse(oParametros.Parametro1));

                return Ok(new { success = proyecto });
            }
            catch (Exception)
            {

                return Ok(new { success = false });
            }
        }


        [HttpPost]
        public IHttpActionResult EliminarProyecto(ParametrosDTO IdProyecto)
        {

            try
            {
                MenuBl oMenu = new MenuBl();

                 oMenu.EliminarProyecto(int.Parse(IdProyecto.Parametro1));

                return Ok(new { success = true});
            }
            catch (Exception)
            {

                return Ok(new { success = false });
            }
        }

    }
    }
