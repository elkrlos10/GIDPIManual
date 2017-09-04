using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace LogicaNegocio.LogicaNegocio
{
    public class CronogramaPresupuestoBL
    {
        Model1 entity = new Model1();

        public void GuardarCronograma(List<Cronograma> oListCronograma)
        {
            foreach (var item in oListCronograma)
            {
                if (item.IdCronograma == 0)
                {
                    entity.Cronograma.Add(item);
                    entity.SaveChanges();
                }
                else
                {
                    var cronograma = (from i in entity.Cronograma
                                       where i.IdCronograma == item.IdCronograma
                                      select i).FirstOrDefault();
                    cronograma.Actividad = item.Actividad;
                    cronograma.FechaInicio = item.FechaInicio.ToString();
                    cronograma.FechaFin = item.FechaFin.ToString();
             
                    entity.SaveChanges();

                }
            }
        }
    }
}
