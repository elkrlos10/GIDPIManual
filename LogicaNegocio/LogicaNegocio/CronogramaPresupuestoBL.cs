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



            var id = oListCronograma[0].IdProyecto;
            var Proyecto = (from i in entity.Proyecto
                            where i.IdProyecto == id
                            select i).FirstOrDefault();

            if (Proyecto.Etapa <=8)
            {
                Proyecto.Etapa = 8;
                entity.SaveChanges();
            }

        }

        public List<Cronograma> ConsultarCronograma(int IdProyecto)
        {
            var Crono = (from i in entity.Cronograma
                         where i.IdProyecto == IdProyecto
                         select i).ToList();
            return Crono;
        }


        public void GuardarPresupuesto(List<Presupuesto> oListPresupuesto)
        {
            foreach (var item in oListPresupuesto)
            {
                if (item.IdPresupuesto == 0)
                {


                    entity.Presupuesto.Add(item);
                    entity.SaveChanges();
                }
                else
                {
                    var Presupuesto2 = (from i in entity.Presupuesto
                                      where i.IdPresupuesto == item.IdPresupuesto
                                      select i).FirstOrDefault();
                    Presupuesto2.Item = item.Item;
                    Presupuesto2.Concepto = item.Concepto;
                    Presupuesto2.Descripcion = item.Descripcion;
                    Presupuesto2.Unidad = item.Unidad;
                    Presupuesto2.Cantidad = item.Cantidad;
                    Presupuesto2.ValorUnitario = item.ValorUnitario;

                    entity.SaveChanges();

                }
            }



            var id = oListPresupuesto[0].IdProyecto;
            var Proyecto = (from i in entity.Proyecto
                            where i.IdProyecto == id
                            select i).FirstOrDefault();

            if (Proyecto.Etapa <= 9)
            {
                Proyecto.Etapa = 9;
                entity.SaveChanges();
            }

        }


        public List<Presupuesto> ConsultarPresupuesto(int IdProyecto)
        {
            var Presupuesto = (from i in entity.Presupuesto
                         where i.IdProyecto == IdProyecto
                         select i).ToList();
            return Presupuesto;
        }

        public void GuardarAIU(Aiu AUI)
        {
            

            if (AUI.IdAIU == 0)
            {
                entity.AIU.Add(AUI);
                entity.SaveChanges();
            }
            else
            {
                var aiu = ConsultarAIU(AUI.IdProyecto);

                aiu.Iva = AUI.Iva;
                aiu.A = AUI.A;
                aiu.I = AUI.I;
                aiu.U = AUI.U;
                aiu.ValorTotal = AUI.ValorTotal;
                entity.SaveChanges();
            }
        }

        public Aiu ConsultarAIU(int IdProyecto)
        {
            var aiu = (from i in entity.AIU
                       where i.IdProyecto == IdProyecto
                       select i).FirstOrDefault();

            return aiu;
        }

    }
}
