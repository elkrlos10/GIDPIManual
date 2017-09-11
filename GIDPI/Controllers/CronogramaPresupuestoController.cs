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
        public IHttpActionResult GuardarCronograma(List<Cronograma> oListaCronograma)
        {
            try
            {
                CronogramaPresupuestoBL oCronogramaPresupuestoBl = new CronogramaPresupuestoBL();
                oCronogramaPresupuestoBl.GuardarCronograma(oListaCronograma);

                return Ok(new { success = true });

            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });

            }
        }

        [HttpPost]
        public IHttpActionResult ConsultarCronograma(ParametrosDTO oParametros)
        {
            try
            {
                CronogramaPresupuestoBL oCronogramaPresupuestoBl = new CronogramaPresupuestoBL();
               var Cronograma = oCronogramaPresupuestoBl.ConsultarCronograma(int.Parse(oParametros.Parametro1));

                return Ok(new { success = true,Cronograma });

            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });

            }
        }

        [HttpPost]
        public IHttpActionResult GuardarPresupuesto(List<Presupuesto> oListaPresupuesto)
        {
            try
            {
                CronogramaPresupuestoBL oCronogramaPresupuestoBl = new CronogramaPresupuestoBL();
                oCronogramaPresupuestoBl.GuardarPresupuesto(oListaPresupuesto);

                return Ok(new { success = true });

            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });

            }
        }
        [HttpPost]
        public IHttpActionResult ConsultarPresupuesto(ParametrosDTO oParametros)
        {
            try
            {
                CronogramaPresupuestoBL oCronogramaPresupuestoBl = new CronogramaPresupuestoBL();
                var Presupuesto = oCronogramaPresupuestoBl.ConsultarPresupuesto(int.Parse(oParametros.Parametro1));

                return Ok(new { success = true, Presupuesto });

            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });

            }
        }

        [HttpPost]
        public IHttpActionResult GuardarAIU(Aiu AIU)
        {
            try
            {
                CronogramaPresupuestoBL oCronogramaPresupuestoBl = new CronogramaPresupuestoBL();
               oCronogramaPresupuestoBl.GuardarAIU(AIU);

                return Ok(new { success = true });

            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });

            }
        }

        [HttpPost]
        public IHttpActionResult ConsultarAIU(ParametrosDTO oParametros)
        {
            try
            {
                CronogramaPresupuestoBL oCronogramaPresupuestoBl = new CronogramaPresupuestoBL();
                var AIU= oCronogramaPresupuestoBl.ConsultarAIU(int.Parse(oParametros.Parametro1));

                return Ok(new { success = true, AIU });

            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });

            }
        }

    }
}