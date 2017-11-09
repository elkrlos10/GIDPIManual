using Datos;
using Datos.Modelos;
using LogicaNegocio.Mail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class UsuarioBl
    {
        public Usuario ConsutarUsuario(Usuario oUsuario)
        {
            Model1 entity = new Model1();
            //var Encriptar = SecurityEncode.SecurityEncode.Encriptar(oUsuario.Contrasena);
            var usuario = (from i in entity.Usuario
                           where i.Usuario1 == oUsuario.Usuario1
                           && i.Contrasena == oUsuario.Contrasena
                           select i).FirstOrDefault();
            return usuario;
        }

        public string ConsutarEmail(string correo)
        {
            var mensaje = "";

            Model1 entity = new Model1();
            var emailN = (from i in entity.PersonaNatural
                         where i.Email == correo
                         select i).FirstOrDefault();


            if (emailN == null )
            {
                var emailJ = (from i in entity.PersonaJuridica
                              where i.Email == correo
                              select i).FirstOrDefault();
                if (emailJ != null)
                {
                    var Usuario = (from i in entity.Usuario
                                  where i.IdUsuario == emailJ.IdUsuario
                                  select i).FirstOrDefault();

                    var Asunto = "Recuperación contraseña GIDPI";
                    //var Plantilla ="Gracias pa"+"<b>Usuario:</b> " + Usuario.Usuario1 + "<br/> <b>Contraseña:</b> " + Usuario.Contrasena;
                    var body = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\">";
                    body += "<HTML><HEAD><META http-equiv=Content-Type content=\"text/html; charset=iso-8859-1\">";
                    body += "</HEAD><BODY><DIV style='height:100%; width:700px;  margin-left:25%; transform:translateX(-50%)'><div style='height:70px; width:700px;   background-color:#238276;'><img src=\"cid:Adriana\" width='104' height='27' alt='img' style='margin: 20px 0px 0px 20px;'/></div><P>Hola</P><P>La solicitud para recuperar su contraseña ha sido aceptada</P>";
                    body += "<H3>INFORMACION DE CONTACTO</H3></br><H3><B>Usuario: </B></H3>" + Usuario.Usuario1 + " <H3><B> Contraseña: </B></H3> " + Usuario.Contrasena;
                    body += "<P>Puede dirigirse a la pagina principal de GIDPI para ingresar al aplicativo.</P><A href='www.gidpi.com/#/Login'>GIDPI</A>";
                    body += "<P><I>Esto es un correo electronico generado automaticamente enviado por el aplicativo GIDPI. Su correo no se enviara a GIDPI si responde a este mensaje.</I></P></DIV></BODY></HTML>";
                    SendMail.SendMailMessage(Asunto, body, emailJ.Email);

                    mensaje = "Su contraseña fue enviada " + emailJ.Email;
                }
                else
                {
                    mensaje = "El correo ingresado no se encuentra registrado";
                }
                
            }
            else
            {
                var Usuario = (from i in entity.Usuario
                               where i.IdUsuario == emailN.IdUsuario
                               select i).FirstOrDefault();

                var Asunto = "Recuperación contraseña GIDPI";

                //var Plantilla = "<div><img src='/GIDPIManual/GIDPI/images/Adriana.png' /> </div>" +
                //       " <div style='float:right; background:blue; height: 120%;'><br><b>Usuario:</b> " + Usuario.Usuario1 + "<br/> <b>Contraseña:</b> " + Usuario.Contrasena+"</div>";
                var body = "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\">";
                body += "<HTML><HEAD><META http-equiv=Content-Type content=\"text/html; charset=iso-8859-1\">";
                body += "</HEAD><BODY><DIV style='height:100%; width:700px;  margin-left:25%; transform:translateX(-50%)'><div style='height:70px; width:700px;   background-color:#238276;'><img src=\"cid:Adriana\" width='104' height='27' alt='img' style='margin: 20px 0px 0px 20px;'/></div><P>Hola</P><P>La solicitud para recuperar su contraseña ha sido aceptada</P>";
                body += "<H3>INFORMACION DE CONTACTO</H3></br><H3><B>Usuario: </B></H3>" + Usuario.Usuario1 + " <H3><B> Contraseña: </B></H3> " + Usuario.Contrasena;
                body += "<P>Puede dirigirse a la pagina principal de GIDPI para ingresar al aplicativo.</P><A href='www.gidpi.com/#/Login'>GIDPI</A>";
                body += "<P><I>Esto es un correo electronico generado automaticamente enviado por el aplicativo GIDPI. Su correo no se enviara a GIDPI si responde a este mensaje.</I></P></DIV></BODY></HTML>";


                SendMail.SendMailMessage(Asunto, body, emailN.Email);


                mensaje = "Su contraseña fue enviada al correo : " + emailN.Email;
            }

            return mensaje;

        }
    }
}
