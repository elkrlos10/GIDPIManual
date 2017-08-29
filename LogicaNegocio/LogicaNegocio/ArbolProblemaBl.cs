using Datos.DTO;
using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class ArbolProblemaBl
    {
        Model1 entity = new Model1();

        public MatrizDTO ArbolProblemaProyecto(int IdProyecto)
        {

            var matriz = (from i in entity.MatrizVester
                          where i.IdProyecto == IdProyecto
                          select i).FirstOrDefault();

            if (matriz == null)
            {
                return null;
            }
            var detalle = (from i in entity.DetalleMatriz
                           where i.IdMatriz == matriz.IdMatriz
                           select i).ToList();

            MatrizDTO oArbol = new MatrizDTO();

            oArbol.IdProyecto = matriz.IdProyecto;
            oArbol.IdMatriz = matriz.IdMatriz;
            oArbol.ProblemaGeneral = matriz.ProblemaGeneral;
            oArbol.DetalleMat = detalle;



            return oArbol;
        }

        public void GuardarDatosArbol(ArbolProblemaDTO oArbolDTO)
        {
            ArbolProblema oArbol = new ArbolProblema();
            oArbol.IdProyecto = oArbolDTO.IdProyecto;
            oArbol.ProblemaCentral = oArbolDTO.ProblemaCentral;
            entity.ArbolProblema.Add(oArbol);
            entity.SaveChanges();


            var ArbolProyecto = (from i in entity.ArbolProblema
                                 where i.IdProyecto == oArbolDTO.IdProyecto
                                 select i).FirstOrDefault();


            foreach (var item in oArbolDTO.Causas)
            {
                if (item.Causa != "")
                {
                    CausaDirecta oCausa = new CausaDirecta();
                    oCausa.IdArbolProblema = ArbolProyecto.IdArbolProblema;
                    oCausa.Causa = item.Causa;
                    entity.CausaDirecta.Add(oCausa);
                    entity.SaveChanges();

                    var causa = (from i in entity.CausaDirecta
                                 orderby i.IdCausa descending
                                 select i).FirstOrDefault();

                    foreach (var item1 in item.CausaIndirecta)
                    {
                        CausaIndirecta oCausaIndirecta = new CausaIndirecta();
                        oCausaIndirecta.IdCausa = causa.IdCausa;
                        oCausaIndirecta.CausaIndirecta1 = item1;
                        entity.CausaIndirecta.Add(oCausaIndirecta);
                        entity.SaveChanges();
                    }
                }
            }

            foreach (var item in oArbolDTO.Efectos)
            {
                if (item.Efecto != "")
                {
                    EfectoDirecto oEfecto = new EfectoDirecto();
                    oEfecto.IdArbolProblema = ArbolProyecto.IdArbolProblema;
                    oEfecto.Efecto = item.Efecto;
                    entity.EfectoDirecto.Add(oEfecto);
                    entity.SaveChanges();

                    var efecto = (from i in entity.EfectoDirecto
                                  orderby i.IdEfecto descending
                                  select i).FirstOrDefault();

                    foreach (var item1 in item.EfectoIndirecta)
                    {
                        EfectoIndirecto oEfectoIndirecto = new EfectoIndirecto();
                        oEfectoIndirecto.IdEfecto = efecto.IdEfecto;
                        oEfectoIndirecto.EfectoIndirecto1 = item1;
                        entity.EfectoIndirecto.Add(oEfectoIndirecto);
                        entity.SaveChanges();
                    }
                }
            }

            var proyecto = (from i in entity.Proyecto
                            where i.IdProyecto == oArbolDTO.IdProyecto
                            select i).FirstOrDefault();

            proyecto.Etapa = 3;
            entity.SaveChanges();
        }

        public ArbolProblemaDTO ConsultarArbolFinal(int IdProyecto)
        {
            var arbol = (from i in entity.ArbolProblema
                         where i.IdProyecto == IdProyecto
                         select i).FirstOrDefault();


            List<Causas> ListaoCausas = new List<Causas>();
            var causas = (from i in entity.CausaDirecta
                          where i.IdArbolProblema == arbol.IdArbolProblema
                          select i).ToList();

            foreach (var item in causas)
            {
                Causas oCausas = new Causas();
                var causasIndirectas = (from i in entity.CausaIndirecta
                                        where i.IdCausa == item.IdCausa
                                        select i.CausaIndirecta1).ToList();

                oCausas.Causa = item.Causa;
                oCausas.CausaIndirecta = causasIndirectas;
                ListaoCausas.Add(oCausas);
            }



            var efectos = (from i in entity.EfectoDirecto
                           where i.IdArbolProblema == arbol.IdArbolProblema
                           select i).ToList();

            List<Efectos> ListaoEfectos = new List<Efectos>();
            foreach (var item in efectos)
            {
                Efectos oEfecto = new Efectos();
                var efectosIndirectas = (from i in entity.EfectoIndirecto
                                         where i.IdEfecto == item.IdEfecto
                                         select i.EfectoIndirecto1).ToList();

                oEfecto.Efecto = item.Efecto;
                oEfecto.EfectoIndirecta = efectosIndirectas;
                ListaoEfectos.Add(oEfecto);
            }

            ArbolProblemaDTO oArbolDTO = new ArbolProblemaDTO();

            oArbolDTO.IdProyecto = IdProyecto;
            oArbolDTO.ProblemaCentral = arbol.ProblemaCentral;
            oArbolDTO.Efectos = ListaoEfectos;
            oArbolDTO.Causas = ListaoCausas;

            return oArbolDTO;

        }
    }
}
