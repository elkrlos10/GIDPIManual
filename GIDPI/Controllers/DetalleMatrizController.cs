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
    public class DetalleMatrizController: ApiController
    {
        [HttpPost]
        public IHttpActionResult Guardar(MatrizDTO oMatrizDetalle)
        {
            try
            {
                MatrizBl oMatriz = new MatrizBl();

                oMatriz.Guardar(oMatrizDetalle);

                return Ok(new { success = true });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }

        [HttpPost]
        public IHttpActionResult ConsultarMatriz(ParametrosDTO oParamatros)
        {
            try
            {
                MatrizBl oMatriz = new MatrizBl();

               var matriz = oMatriz.ConsultarMatriz(int.Parse(oParamatros.Parametro1));

                return Ok(new { success = true, matriz });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }

        [HttpPost]
        public IHttpActionResult OmitirMatriz(ParametrosDTO oParamatros)
        {
            try
            {
               MatrizBl oMatriz = new MatrizBl();

               oMatriz.OmitirMatriz(int.Parse(oParamatros.Parametro1));

                return Ok(new { success = true });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }
    }
}