using Datos.DTO;
using GIDPI.Parametros;
using LogicaNegocio.LogicaNegocio;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace GIDPI.Controllers
{
    public class ArbolProblemaController : ApiController
    {
        [HttpPost]
        public IHttpActionResult ArbolProblemaProyecto(ParametrosDTO oParametros)
        {
            try
            {
                ArbolProblemaBl oArbol = new ArbolProblemaBl();

                var arbol = oArbol.ArbolProblemaProyecto(int.Parse(oParametros.Parametro1));

                return Ok(new { success = true, arbol });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }


        [HttpPost]
        public IHttpActionResult GuardarDatosArbol(ArbolProblemaDTO oArbolDTO)
        {
            try
            {
                ArbolProblemaBl oArbol = new ArbolProblemaBl();
                oArbol.GuardarDatosArbol(oArbolDTO);

                return Ok(new { success = true });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }

        [HttpPost]
        public IHttpActionResult ConsultarArbolFinal(ParametrosDTO oParametros)
        {
            try
            {
                ArbolProblemaBl oArbol = new ArbolProblemaBl();
                var ArbolFinal = oArbol.ConsultarArbolFinal(int.Parse(oParametros.Parametro1));

                return Ok(new { success = true, ArbolFinal });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }

        [HttpPost]
        public IHttpActionResult UploadFileArea(ParametrosDTO oParametros)
        {
            //Model entity = new Model ();
            try
            {

                string base64 = oParametros.Parametro1.Split(',')[1];
                // Convert base 64 string to byte[]
                byte[] imageBytes = Convert.FromBase64String(base64);
                // Convert byte[] to Image
                var ms = new MemoryStream(imageBytes, 0, imageBytes.Length);
                
                    var image = Image.FromStream(ms, true);
                  
                


                return Ok(new { success = true, message = "La extencion del archivo no es valida" });
            }

            catch (Exception exc)
            {

                return Ok(new { success = false, message = exc.Message });
            }
        }
    }
}