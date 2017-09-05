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
    public class CronogramaPresupuestoController:ApiController
    {
        [HttpPost]
        public IHttpActionResult GuardarCronograma(List<Involucrados> oListaInvolucrados)
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


    }
}