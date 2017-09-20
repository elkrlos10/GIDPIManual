using Datos;
using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class AdminBl
    {

        Model1 entity = new Model1();



        public List<int> cosultarGrafica()
        {
            List<int> Datos = new List<int>();


            var TotalUsuarios = (from i in entity.Usuario
                                 where i.TipoUsuario != 3
                                 select i).Count();

            Datos.Add(TotalUsuarios);

            var  PersonaNatural = (from i in entity.Usuario
                                     where i.TipoUsuario == 1
                                     select i).Count();
            Datos.Add(PersonaNatural);


            var PersonaJuridica = (from i in entity.Usuario
                                  where i.TipoUsuario == 2
                                  select i).Count();


            Datos.Add(PersonaJuridica);


            var Proyectos = (from i in entity.Proyecto
                                   select i).Count();

            Datos.Add(Proyectos);

            var TipoProyectoInnovacion = (from i in entity.Proyecto
                                where i.TipoProyecto == "INNOVACIÓN" 
                                select i).Count();
            Datos.Add(TipoProyectoInnovacion);

            var TipoProyectoServicios = (from i in entity.Proyecto
                                          where i.TipoProyecto == "SERVICIOS TECNOLÓGICOS"
                                          select i).Count();
            Datos.Add(TipoProyectoServicios);


            var TipoProyectoInvestigacion = (from i in entity.Proyecto
                                         where i.TipoProyecto == "INVESTIGACIÓN"
                                         select i).Count();
            Datos.Add(TipoProyectoInvestigacion);

            var TipoProyectoOtro = (from i in entity.Proyecto
                                             where i.TipoProyecto == "OTRO"
                                             select i).Count();

            Datos.Add(TipoProyectoOtro);


            var ProyectoCompleto = (from i in entity.Proyecto
                                          where i.Etapa >= 10
                                          select i).Count();
            Datos.Add(ProyectoCompleto);

            var ProyectoDesarrollo = (from i in entity.Proyecto
                                          where i.Etapa  < 10
                                          select i).Count();
            Datos.Add(ProyectoDesarrollo);


            var matriz = (from i in entity.MatrizVester
                          select i).Count();


            var totalMatriz = (Proyectos - matriz);

            Datos.Add(Proyectos);

            Datos.Add(totalMatriz);

            return Datos;

        }
    }
}
