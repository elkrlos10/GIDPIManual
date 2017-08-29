using Datos.DTO;
using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class ArbolObjetivoBl
    {
        Model1 entity = new Model1();
        public void GuardarDatosArbolObjetivos(ArbolObjetivoDTO oArbolDTO)
        {
            ArbolObjetivos oArbol = new ArbolObjetivos();
            oArbol.IdProyecto = oArbolDTO.IdProyecto;
            oArbol.ObjetivoCentral = oArbolDTO.ObjetivoCentral;
            entity.ArbolObjetivos.Add(oArbol);
            entity.SaveChanges();


            var ArbolProyecto = (from i in entity.ArbolObjetivos
                                 where i.IdProyecto == oArbolDTO.IdProyecto
                                 select i).FirstOrDefault();


            foreach (var item in oArbolDTO.Medios)
            {
                if (item.Medio != "")
                {
                    MedioDirecto oMedio = new MedioDirecto();
                    oMedio.IdArbolObj = ArbolProyecto.IdArbolObj;
                    oMedio.MedioDirecto1 = item.Medio;
                    entity.MedioDirecto.Add(oMedio);
                    entity.SaveChanges();

                    var medio = (from i in entity.MedioDirecto
                                 orderby i.IdMedio descending
                                 select i).FirstOrDefault();

                    foreach (var item1 in item.MediosIndirectos)
                    {
                        MediosIndirectos oMedioIndirecto = new MediosIndirectos();
                        oMedioIndirecto.IdMedio = medio.IdMedio;
                        oMedioIndirecto.MedioIndirecto = item1;
                        entity.MediosIndirectos.Add(oMedioIndirecto);
                        entity.SaveChanges();
                    }
                }
            }

            foreach (var item in oArbolDTO.Fines)
            {
                if (item.fin != "")
                {
                    FinesDirectos oFines = new FinesDirectos();
                    oFines.IdArbolObj = ArbolProyecto.IdArbolObj;
                    oFines.FinDirecto = item.fin;
                    entity.FinesDirectos.Add(oFines);
                    entity.SaveChanges();

                    var fines = (from i in entity.FinesDirectos
                                 orderby i.IdFin descending
                                 select i).FirstOrDefault();

                    foreach (var item1 in item.FinesIndirectos)
                    {
                        FinesIndirectos oFinesIndirectos = new FinesIndirectos();
                        oFinesIndirectos.IdFIn = fines.IdFin;
                        oFinesIndirectos.FinIndirecto = item1;
                        entity.FinesIndirectos.Add(oFinesIndirectos);
                        entity.SaveChanges();
                    }
                }
            }

            var proyecto = (from i in entity.Proyecto
                            where i.IdProyecto == oArbolDTO.IdProyecto
                            select i).FirstOrDefault();

            proyecto.Etapa = 4;
            entity.SaveChanges();
        }

        public ArbolObjetivoDTO ConsultarArbolObjetivosFinal(int IdProyecto)
        {
            var arbol = (from i in entity.ArbolObjetivos
                         where i.IdProyecto == IdProyecto
                         select i).FirstOrDefault();


            List<Medios> ListaoMedios = new List<Medios>();

            var medios = (from i in entity.MedioDirecto
                          where i.IdArbolObj == arbol.IdArbolObj
                          select i).ToList();

            foreach (var item in medios)
            {
                Medios oMedios = new Medios();
                var mediosDirectos = (from i in entity.MediosIndirectos
                                      where i.IdMedio == item.IdMedio
                                      select i.MedioIndirecto).ToList();


                oMedios.Medio = item.MedioDirecto1;
                oMedios.MediosIndirectos = mediosDirectos;
                ListaoMedios.Add(oMedios);
            }



            var fines = (from i in entity.FinesDirectos
                         where i.IdArbolObj == arbol.IdArbolObj
                         select i).ToList();

            List<Fines> ListaoFines = new List<Fines>();
            foreach (var item in fines)
            {
                Fines oFin = new Fines();
                var FinesIndirectos = (from i in entity.FinesIndirectos
                                       where i.IdFIn == item.IdFin
                                       select i.FinIndirecto).ToList();

                oFin.fin = item.FinDirecto;
                oFin.FinesIndirectos = FinesIndirectos;
                ListaoFines.Add(oFin);
            }

            ArbolObjetivoDTO oArbolDTO = new ArbolObjetivoDTO();

            oArbolDTO.IdProyecto = IdProyecto;
            oArbolDTO.ObjetivoCentral = arbol.ObjetivoCentral;
            oArbolDTO.Fines = ListaoFines;
            oArbolDTO.Medios = ListaoMedios;

            return oArbolDTO;

        }

        public void GuardarObjetivos(ObjetivosDTO oObjetivosDTO)
        {
            ObjetivoGeneral objetivoGeneral = new ObjetivoGeneral();
            objetivoGeneral.IdProyecto = oObjetivosDTO.IdProyecto;
            objetivoGeneral.ObjetivoCentral = oObjetivosDTO.ObjetivoCentral;

            entity.ObjetivoGeneral.Add(objetivoGeneral);
            entity.SaveChanges();

            var objetivoGen = (from i in entity.ObjetivoGeneral
                               orderby i.IdObjetivoGeneral descending
                               select i).FirstOrDefault();

            for (int i = 0; i < oObjetivosDTO.Objetivos.Count; i++)
            {
                var especificos = (from f in entity.ObejetivosEspecificos
                                   orderby f.IdObjetivoEsp descending
                                   select f).FirstOrDefault();
                //ObejetivosEspecificos especificos;

                if (i == 0 || i == 3 || i == 6 || i == 9 || i == 12)
                {
                    if (oObjetivosDTO.Objetivos[i].ObjetivoEsp != "")
                    {
                        

                        ObejetivosEspecificos objetivoEspecifico = new ObejetivosEspecificos();
                        objetivoEspecifico.IdObjetivoGeneral = objetivoGen.IdObjetivoGeneral;
                        objetivoEspecifico.ObjetivoEsp = oObjetivosDTO.Objetivos[i].ObjetivoEsp;

                        entity.ObejetivosEspecificos.Add(objetivoEspecifico);
                        entity.SaveChanges();

                        especificos = (from f in entity.ObejetivosEspecificos
                                       orderby f.IdObjetivoEsp descending
                                       select f).FirstOrDefault();
                    }

                }


                if (oObjetivosDTO.Objetivos[i].Resultado1 != "" && oObjetivosDTO.Objetivos[i].MedidaResultado!= "" && oObjetivosDTO.Objetivos[i].HerramientaResultado != "" && oObjetivosDTO.Objetivos[i].ProductoResultado!="")
                {
                    Resultados ResultadosObjetivos = new Resultados();
                    ResultadosObjetivos.IdObjetivoEsp = especificos.IdObjetivoEsp;
                    ResultadosObjetivos.Resultado = oObjetivosDTO.Objetivos[i].Resultado1;
                    ResultadosObjetivos.MedidaResultado = oObjetivosDTO.Objetivos[i].MedidaResultado;
                    ResultadosObjetivos.HerramientaResultado = oObjetivosDTO.Objetivos[i].HerramientaResultado;
                    ResultadosObjetivos.ProductoResultado = oObjetivosDTO.Objetivos[i].ProductoResultado;

                    entity.Resultados.Add(ResultadosObjetivos);
                    entity.SaveChanges();
                }

            }

            var Proyecto = (from i in entity.Proyecto
                            where i.IdProyecto== oObjetivosDTO.IdProyecto
                            select i ).FirstOrDefault();
            Proyecto.Etapa = 5;
            entity.SaveChanges();

      
        }

        public Tuple<ObjetivosDTO,List<ObejetivosEspecificos>> ConsultarDatosObjetivos(int idProyecto)
        {
            List<ObjetivosEspe> listaObjetivos = new List<ObjetivosEspe>();

            ObjetivosDTO oObjetivoDTO = new ObjetivosDTO();
            var objetivoGeneral1 = (from i in entity.ObjetivoGeneral
                                    where i.IdProyecto == idProyecto
                                    select i).FirstOrDefault();

            oObjetivoDTO.ObjetivoCentral = objetivoGeneral1.ObjetivoCentral;
            oObjetivoDTO.IdProyecto = objetivoGeneral1.IdProyecto;


            var objetivosEspecificos = (from i in entity.ObejetivosEspecificos
                                        where i.IdObjetivoGeneral == objetivoGeneral1.IdObjetivoGeneral
                                        select i).ToList();

           
            foreach (var item in objetivosEspecificos)
            {
               
                var ObjetivosResultados = (from i in entity.Resultados
                                           where i.IdObjetivoEsp == item.IdObjetivoEsp
                                           select i).ToList();

               
                foreach (var item1 in ObjetivosResultados)
                {
                    ObjetivosEspe Obj = new ObjetivosEspe();

                    Obj.ObjetivoEsp = item.ObjetivoEsp;
                    Obj.Resultado1 = item1.Resultado;
                    Obj.MedidaResultado = item1.MedidaResultado;
                    Obj.HerramientaResultado = item1.HerramientaResultado;
                    Obj.ProductoResultado = item1.ProductoResultado;

                    listaObjetivos.Add(Obj);
                }

               
            }

            oObjetivoDTO.Objetivos = listaObjetivos;

            return new Tuple<ObjetivosDTO, List<ObejetivosEspecificos>> (oObjetivoDTO, objetivosEspecificos);

        }
    }
}
