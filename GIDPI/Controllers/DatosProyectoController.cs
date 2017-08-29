using LogicaNegocio.LogicaNegocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Datos;
using GIDPI.Parametros;
using Datos.Modelos;

namespace GIDPI.Controllers
{
    public class DatosProyectoController : ApiController
    {
        [HttpGet]
        public IHttpActionResult ConsultarDepartamentos()
        {
            try
            {
                DatosProyectoBl oDatosProyectoBl = new DatosProyectoBl();

                var departamentos = oDatosProyectoBl.ConsultarDepartamentos();

                return Ok(new { success = true, departamentos });
            }
            catch (Exception exc)
            {

                return Ok(new { success = false, exc.Message });
            }
        }

        [HttpPost]
        public IHttpActionResult ConsultarMunicipiosDepartamento(ParametrosDTO oParametrosDTO)
        {

            try
            {
                DatosProyectoBl oDatosProyectoBl = new DatosProyectoBl();

                var municipios = oDatosProyectoBl.ConsultarMunicipiosDepartamento(int.Parse(oParametrosDTO.Parametro1));

                return Ok(new { success = true, municipios });
            }
            catch (Exception exc)
            {

                return Ok(new { suceess = false });
            }
        }


        [HttpPost]
        public IHttpActionResult ConsultarDepartamentoxMunicipio(ParametrosDTO oParametrosDTO)
        {

            try
            {
                DatosProyectoBl oDatosProyectoBl = new DatosProyectoBl();

                var departamento = oDatosProyectoBl.ConsultarDepartamentoxMunicipio(int.Parse(oParametrosDTO.Parametro1));

                return Ok(new { success = true, departamento });
            }
            catch (Exception exc)
            {

                return Ok(new { suceess = false, exc.Message });
            }
        }

        [HttpPost]
        public IHttpActionResult GuardarDatosProyecto(Proyecto oProyecto)
        {

            try
            {
                DatosProyectoBl oDatosProyectoBl = new DatosProyectoBl();

                var proyecto = oDatosProyectoBl.GuardarDatosProyecto(oProyecto);

                return Ok(new { success = true, proyecto });
            }
            catch (Exception exc)
            {

                return Ok(new { suceess = false });
            }
        }

        [HttpPost]
        public IHttpActionResult ModificarProyecto(Proyecto oProyecto)
        {

            try
            {
                DatosProyectoBl oDatosProyectoBl = new DatosProyectoBl();

                oDatosProyectoBl.ModificarProyecto(oProyecto);

                return Ok(new { success = true});
            }
            catch (Exception exc)
            {

                return Ok(new { suceess = false });
            }
        }

        [HttpPost]
        public IHttpActionResult ConsultarProyecto(ParametrosDTO oParametros)
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

    }
}