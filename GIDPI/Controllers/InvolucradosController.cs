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
    public class InvolucradosController:ApiController
    {
        [HttpPost]
        public IHttpActionResult GuardarInvolucrados(List<Involucrados> oListaInvolucrados)
        {
            try
            {
                InvolucradosBL oInvolucradosBL = new InvolucradosBL();
                oInvolucradosBL.GuardarInvolucrados(oListaInvolucrados);
                
                return Ok(new { success = true });

            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });

            }
        }

        [HttpPost]
        public IHttpActionResult ConsultarInvolucrados(ParametrosDTO oParametros )
        {
            try
            {
                InvolucradosBL oInvolucradosBL = new InvolucradosBL();
                var involucrados =  oInvolucradosBL.ConsultarInvolucrados(int.Parse(oParametros.Parametro1));

                return Ok(new { success = true,involucrados });

            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });

            }
        }


        [HttpPost]
        public IHttpActionResult EliminarInvolucrado(ParametrosDTO oParametros)
        {
            try
            {
                InvolucradosBL oInvolucradosBL = new InvolucradosBL();
                oInvolucradosBL.EliminarInvolucrado(int.Parse(oParametros.Parametro1));

                return Ok(new { success = true });

            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });

            }
        }

    }
}