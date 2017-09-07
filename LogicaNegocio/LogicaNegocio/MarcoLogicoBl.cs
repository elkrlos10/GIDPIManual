using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class MarcoLogicoBl
    {
        Model1 entity = new Model1();

        public MarcoLogico LLenarMarco(int IdProyecto)
        {
            MarcoLogico oMarco = new MarcoLogico();

            var ObjetivoGeneral = (from i in entity.ObjetivoGeneral
                                   where i.IdProyecto == IdProyecto
                                   select i).FirstOrDefault();

            var ObjetivosEspecificos = (from i in entity.ObejetivosEspecificos
                                        where i.IdObjetivoGeneral == ObjetivoGeneral.IdObjetivoGeneral
                                        select i).ToList();
            var contadorEspe = 0;
            var contadorRes = 0;
            foreach (var item in ObjetivosEspecificos)
            {
                contadorEspe++;
                var resultados = (from i in entity.Resultados
                                  where i.IdObjetivoEsp == item.IdObjetivoEsp
                                  select i).ToList();

                if (oMarco.Proposito1 == "" || oMarco.Proposito1 == null)
                {
                    oMarco.Proposito1 = contadorEspe.ToString() + "- " + item.ObjetivoEsp;
                }
                else
                {
                    oMarco.Proposito1 = oMarco.Proposito1 + " \n" + contadorEspe.ToString() + "- " + item.ObjetivoEsp;
                }

               
                foreach (var item1 in resultados)
                {
                    contadorRes++;
                   
                    if (oMarco.Resultado1 == "" || oMarco.Resultado1 == null)
                    {
                        oMarco.Resultado1 = contadorRes.ToString() + "- " + item.ObjetivoEsp;
                    }
                    else
                    {
                        oMarco.Resultado1 = oMarco.Resultado1 + " \n" + contadorRes.ToString() + "- " + item1.Resultado;
                    }

                }

            }

            var actividades = (from i in entity.Cronograma
                               where i.IdProyecto == IdProyecto
                               select i).ToList();

            var contadorAct = 0;
            foreach (var item in actividades)
            {

                contadorAct++;

                if (oMarco.Actividad1 == "" || oMarco.Actividad1 == null)
                {
                    oMarco.Actividad1 = contadorAct.ToString() + "- " + item.Actividad;
                }
                else
                {
                    oMarco.Actividad1 = oMarco.Actividad1 + " \n" + contadorAct.ToString() + "- " + item.Actividad;
                }

            }
            oMarco.Fin1 = ObjetivoGeneral.ObjetivoCentral;

            return oMarco;

        }


        public void GuardarMarco(MarcoLogico oMarco)
        {

            if (oMarco.IdMarco == 0)
            {
                entity.MarcoLogico.Add(oMarco);
                entity.SaveChanges();
                var Proyecto = (from i in entity.Proyecto
                                where i.IdProyecto == oMarco.IdProyecto
                                select i).FirstOrDefault();

                Proyecto.Etapa = 10;
                entity.SaveChanges();
            }
            else
            {
                var marco = (from i in entity.MarcoLogico
                             where i.IdMarco == oMarco.IdMarco
                             select i).FirstOrDefault();
                marco.Fin1 = oMarco.Fin1;
                marco.Fin2 = oMarco.Fin2;
                marco.Fin3 = oMarco.Fin3;
                marco.Fin4 = oMarco.Fin4;
                marco.Proposito1 = oMarco.Proposito1;
                marco.Proposito2 = oMarco.Proposito2;
                marco.Proposito3 = oMarco.Proposito3;
                marco.Proposito4 = oMarco.Proposito4;
                marco.Resultado1 = oMarco.Resultado1;
                marco.Resultado2 = oMarco.Resultado2;
                marco.Resultado3 = oMarco.Resultado3;
                marco.Resultado4 = oMarco.Resultado4;
                marco.Actividad1 = oMarco.Actividad1;
                marco.Actividad2 = oMarco.Actividad2;
                marco.Actividad3 = oMarco.Actividad3;
                marco.Actividad4 = oMarco.Actividad4;
                entity.SaveChanges();



               
            }
        }


        public MarcoLogico ConsultarMarco(int idProyecto)
        {
            var marco = (from i in entity.MarcoLogico
                         where i.IdProyecto == idProyecto
                         select i).FirstOrDefault();
            return marco;
        }
    }
}
