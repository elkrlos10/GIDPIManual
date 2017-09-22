using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class MenuBl
    {
        Model1 entity = new Model1();

        public Proyecto AbrirProyecto(int IdProyecto)
        {

            var proyecto = (from i in entity.Proyecto
                            where i.IdProyecto == IdProyecto
                            select i).FirstOrDefault();

            return proyecto;
        }


        public void EliminarProyecto(int idProyecto)
        {

            #region matriz marco logico
            var matrizLogico = (from i in entity.MarcoLogico
                                where i.IdProyecto == idProyecto
                                select i).FirstOrDefault();
            if (matrizLogico != null)
            {
                entity.MarcoLogico.Remove(matrizLogico);
                entity.SaveChanges();
            }
            #endregion



            #region Presupuesto
            var Presupuesto = (from i in entity.Presupuesto
                               where i.IdProyecto == idProyecto
                               select i).ToList();
            if (Presupuesto != null)
            {
                foreach (var item in Presupuesto)
                 {
                
                    entity.Presupuesto.Remove(item);
                    entity.SaveChanges();
                 }
            }
            #endregion





            #region Cronograma

            var Cronograma = (from i in entity.Cronograma
                              where i.IdProyecto == idProyecto
                              select i).ToList();
            if (Cronograma != null)
            {
                foreach (var item in Cronograma)
            {
                
                    entity.Cronograma.Remove(item);
                    entity.SaveChanges();
                }
            }
            #endregion


            #region Aiu
            var aiu = (from i in entity.AIU
                       where i.IdProyecto == idProyecto
                       select i).FirstOrDefault();
            if (aiu != null)
            {
                entity.AIU.Remove(aiu);
                entity.SaveChanges();
            }

            #endregion



            #region Nombre de proyecto
            var perfil1 = (from i in entity.PerfilProyecto
                           where i.IdProyecto == idProyecto
                           select i).FirstOrDefault();
            if (perfil1 != null)
            {
                entity.PerfilProyecto.Remove(perfil1);
                entity.SaveChanges();
            }
            #endregion




            #region Perfil de proyecto
            var perfil2 = (from i in entity.Perfil2
                           where i.idProyecto == idProyecto
                           select i).FirstOrDefault();
            if (perfil2 != null)
            {
                entity.Perfil2.Remove(perfil2);
                entity.SaveChanges();
            }
            #endregion



            #region Involucrados
            var Involucrados = (from i in entity.Involucrados
                                where i.IdProyecto == idProyecto
                                select i).ToList();

            if (Involucrados != null)
            {
                foreach (var item in Involucrados)
                {
                
                    entity.Involucrados.Remove(item);
                    entity.SaveChanges();
                }
            }
            #endregion


            #region Objetivos

            var OBjetivoGeneral = (from i in entity.ObjetivoGeneral
                                   where i.IdProyecto == idProyecto
                                   select i).FirstOrDefault();

            if (OBjetivoGeneral != null)
            {
                var ObjetivosEspecificos = (from i in entity.ObejetivosEspecificos
                                            where i.IdObjetivoGeneral == OBjetivoGeneral.IdObjetivoGeneral
                                            select i).ToList();

                foreach (var item in ObjetivosEspecificos)
                {
                    var Resultados = (from i in entity.Resultados
                                      where i.IdObjetivoEsp == item.IdObjetivoEsp
                                      select i).ToList();
                    foreach (var item2 in Resultados)
                    {

                        entity.Resultados.Remove(item2);
                        entity.SaveChanges();

                    }

                    entity.ObejetivosEspecificos.Remove(item);
                    entity.SaveChanges();

                }


                entity.ObjetivoGeneral.Remove(OBjetivoGeneral);
                entity.SaveChanges();
            }



            #endregion

            #region arbol de objetivos
            var Objetivos = (from i in entity.ArbolObjetivos
                             where i.IdProyecto == idProyecto
                             select i).FirstOrDefault();
            if (Objetivos != null)
            {
                var FinesDirectos = (from i in entity.FinesDirectos
                                     where i.IdArbolObj == Objetivos.IdArbolObj
                                     select i).ToList();

                foreach (var item in FinesDirectos)
                {
                    var FinesIndirectos = (from i in entity.FinesIndirectos
                                           where i.IdFIn == item.IdFin
                                           select i).ToList();
                    foreach (var item2 in FinesIndirectos)
                    {
                        entity.FinesIndirectos.Remove(item2);
                        entity.SaveChanges();

                    }

                    entity.FinesDirectos.Remove(item);
                    entity.SaveChanges();
                }

                var MediosDirectos = (from i in entity.MedioDirecto
                                      where i.IdArbolObj == Objetivos.IdArbolObj
                                      select i).ToList();

                foreach (var item in MediosDirectos)
                {
                    var MediosIndirectos = (from i in entity.MediosIndirectos
                                            where i.IdMedio == item.IdMedio
                                            select i).ToList();
                    foreach (var item2 in MediosIndirectos)
                    {
                        entity.MediosIndirectos.Remove(item2);
                        entity.SaveChanges();

                    }

                    entity.MedioDirecto.Remove(item);
                    entity.SaveChanges();
                }

                entity.ArbolObjetivos.Remove(Objetivos);
                entity.SaveChanges();
            }

               
            #endregion


            #region arbol Problema

            var problema = (from i in entity.ArbolProblema
                             where i.IdProyecto == idProyecto
                             select i).FirstOrDefault();

            if (problema != null)
            {
                var efectosDirectos = (from i in entity.EfectoDirecto
                                       where i.IdArbolProblema == problema.IdArbolProblema
                                       select i).ToList();

                foreach (var item in efectosDirectos)
                {
                    var EfectosIndirectos = (from i in entity.EfectoIndirecto
                                             where i.IdEfecto == item.IdEfecto
                                             select i).ToList();
                    foreach (var item2 in EfectosIndirectos)
                    {
                        entity.EfectoIndirecto.Remove(item2);
                        entity.SaveChanges();

                    }

                    entity.EfectoDirecto.Remove(item);
                    entity.SaveChanges();
                }

                var causaDirecta = (from i in entity.CausaDirecta
                                    where i.IdArbolProblema == problema.IdArbolProblema
                                    select i).ToList();

                foreach (var item in causaDirecta)
                {
                    var CausaIndirectas = (from i in entity.CausaIndirecta
                                           where i.IdCausa == item.IdCausa
                                           select i).ToList();
                    foreach (var item2 in CausaIndirectas)
                    {
                        entity.CausaIndirecta.Remove(item2);
                        entity.SaveChanges();

                    }

                    entity.CausaDirecta.Remove(item);
                    entity.SaveChanges();
                }

                entity.ArbolProblema.Remove(problema);
                entity.SaveChanges();
            }


            #endregion

            #region matriz
            var matriz = (from i in entity.MatrizVester
                          where i.IdProyecto == idProyecto
                          select i).FirstOrDefault();
            if (matriz != null)
            {
                var detalleMatriz = (from i in entity.DetalleMatriz
                                     where i.IdMatriz == matriz.IdMatriz
                                     select i).ToList();
                foreach (var item in detalleMatriz)
                {
                    entity.DetalleMatriz.Remove(item);
                    entity.SaveChanges();
                }

                entity.MatrizVester.Remove(matriz);
                entity.SaveChanges();
            }

            #endregion

            #region datosProyecto

            var datos = (from i in entity.Proyecto
                         where i.IdProyecto == idProyecto
                         select i).FirstOrDefault();
            if (datos != null)
            {
                entity.Proyecto.Remove(datos);
                entity.SaveChanges();
            }
          
            #endregion


        }
    }
}
