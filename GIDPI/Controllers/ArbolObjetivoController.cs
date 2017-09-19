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
    public class ArbolObjetivoController: ApiController
    {
        [HttpPost]
        public IHttpActionResult GuardarDatosArbol(ArbolObjetivoDTO oArbolDTO)
        {
            try
            {
                ArbolObjetivoBl oArbol = new ArbolObjetivoBl();
                oArbol.GuardarDatosArbolObjetivos(oArbolDTO);

                return Ok(new { success = true });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }

        [HttpPost]
        public IHttpActionResult ConsultarArbolObjetivosFinal(ParametrosDTO oParametros)
        {
            try
            {
                ArbolObjetivoBl oArbol = new ArbolObjetivoBl();
                var ArbolFinal = oArbol.ConsultarArbolObjetivosFinal(int.Parse(oParametros.Parametro1));

                List<string> Especificos = new List<string>();
                foreach (var item in ArbolFinal.Medios)
                {
                    Especificos.Add(item.Medio);
                }

               return Ok(new { success = true, ArbolFinal, Especificos });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }

        [HttpPost]
        public IHttpActionResult GuardarObjetivos(ObjetivosDTO oObjetivoDTO)
        {
            try
            {
                ArbolObjetivoBl oArbol = new ArbolObjetivoBl();
                oArbol.GuardarObjetivos(oObjetivoDTO);

                return Ok(new { success = true });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }


        [HttpPost]
        public IHttpActionResult ConsultarDatosObjetivos(ParametrosDTO oParametrosDTO)
        {
            try
            {
                ArbolObjetivoBl oArbol = new ArbolObjetivoBl();
               var DatosObjetivos= oArbol.ConsultarDatosObjetivos(int.Parse(oParametrosDTO.Parametro1)).Item1;
                var Especificos = oArbol.ConsultarDatosObjetivos(int.Parse(oParametrosDTO.Parametro1)).Item2;

                return Ok(new { success = true, DatosObjetivos, Especificos });
            }
            catch (Exception e)
            {

                return Ok(new { success = false, e.Message });
            }
        }


        //[HttpPost]
        //public IHttpActionResult UploadFileArea(ParametrosDTO oParametros)
        //{
        //    //Model entity = new Model ();
        //    try
        //    {

        //        string base64 = oParametros.Parametro1.Split(',')[1];
        //        // Convert base 64 string to byte[]
        //        byte[] imageBytes = Convert.FromBase64String(base64);
        //        // Convert byte[] to Image
        //        var ms = new MemoryStream(imageBytes, 0, imageBytes.Length);

        //        var image = Image.FromStream(ms, true);




        //        return Ok(new { success = true, message = "La extencion del archivo no es valida" });
        //    }

        //    catch (Exception exc)
        //    {

        //        return Ok(new { success = false, message = exc.Message });
        //    }
        //}
    }
}