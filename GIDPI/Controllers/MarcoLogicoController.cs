using Datos.DTO;
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
    public class MarcoLogicoController: ApiController
    {

        [HttpPost]
        public IHttpActionResult LLenarMarco (ParametrosDTO oParametrosDTO)
        {
            try
            {
                MarcoLogicoBl oMarco = new MarcoLogicoBl();
               var marco= oMarco.LLenarMarco(int.Parse(oParametrosDTO.Parametro1));

                return Ok(new { success = true, marco });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }

        [HttpPost]
        public IHttpActionResult GuardarMarco( MarcoLogico oMarco)
        {
            try
            {
                MarcoLogicoBl oMarco1 = new MarcoLogicoBl();
                 oMarco1.GuardarMarco(oMarco);

                return Ok(new { success = true });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }

        [HttpPost]
        public IHttpActionResult ConsultarMarco(ParametrosDTO oParametros)
        {
            try
            {
                MarcoLogicoBl oMarco1 = new MarcoLogicoBl();
               var marco= oMarco1.ConsultarMarco(int.Parse(oParametros.Parametro1));

                return Ok(new { success = true, marco });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }
    }
}