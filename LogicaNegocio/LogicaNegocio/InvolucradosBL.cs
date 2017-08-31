using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class InvolucradosBL
    {

        Model1 entity = new Model1();


        public void GuardarInvolucrados(List<Involucrados> oListInvolucrados)
        {
           
            foreach (var item in oListInvolucrados)
            {
                if (item.IdInvolucrado == 0)
                {
                    entity.Involucrados.Add(item);
                    entity.SaveChanges();
                }
                else
                {
                    var involucrado = (from i in entity.Involucrados
                                       where i.IdInvolucrado == item.IdInvolucrado
                                       select i).FirstOrDefault();
                    involucrado.Involucrado = item.Involucrado;
                    involucrado.Interes = item.Interes;
                    involucrado.Problema = item.Problema;
                    involucrado.Recursos = item.Recursos;
                    involucrado.Estrategia = item.Estrategia;
                    entity.SaveChanges();
                    
                }
            }
           
                var id = oListInvolucrados[0].IdProyecto;
                var Proyecto = (from i in entity.Proyecto
                                where i.IdProyecto == id
                                select i).FirstOrDefault();

            if (Proyecto.Etapa<=6)
            {
                Proyecto.Etapa = 6;
                entity.SaveChanges();
            }
          


        }

        public List<Involucrados> ConsultarInvolucrados(int IdProyecto)
        {
            var involucrados = (from i in entity.Involucrados
                                where i.IdProyecto == IdProyecto
                                select i).ToList();

            return involucrados;
        }


    }
}
