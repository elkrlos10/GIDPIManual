using Datos.DTO;
using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class MatrizBl
    {
        Model1 entity = new Model1();

        public void Guardar(MatrizDTO oMatrizDetalle)
        {
            MatrizVester oMatriz = new MatrizVester();

            oMatriz.IdProyecto = oMatrizDetalle.IdProyecto;
            oMatriz.ProblemaGeneral = oMatrizDetalle.ProblemaGeneral;
            entity.MatrizVester.Add(oMatriz);

            var oproyecto = (from i in entity.Proyecto
                            where i.IdProyecto == oMatrizDetalle.IdProyecto
                            select i).FirstOrDefault();

            oproyecto.Etapa = 2;
            entity.SaveChanges();

            var matriz = (from i in entity.MatrizVester
                          where i.IdProyecto == oMatrizDetalle.IdProyecto
                          select i).FirstOrDefault();

          
            foreach (var item in oMatrizDetalle.DetalleMat)
            {
                DetalleMatriz oDetalle = new DetalleMatriz();

                oDetalle.IdMatriz = matriz.IdMatriz;
                oDetalle.Problema = item.Problema;
                oDetalle.EjeX = item.EjeX;
                oDetalle.EjeY = item.EjeY;
                oDetalle.Criterio = item.Criterio;

                entity.DetalleMatriz.Add(oDetalle);
                entity.SaveChanges();
            }

        }

        public MatrizDTO ConsultarMatriz(int IdProyecto)
        {
            var matriz = (from i in entity.MatrizVester
                          where i.IdProyecto == IdProyecto
                          select i).FirstOrDefault();

            var detalleMatriz = (from i in entity.DetalleMatriz
                                where i.IdMatriz == matriz.IdMatriz
                                select i).ToList();

            MatrizDTO oMatriz = new MatrizDTO();

            oMatriz.IdMatriz = matriz.IdMatriz;
            oMatriz.IdProyecto = matriz.IdProyecto;
            oMatriz.ProblemaGeneral = matriz.ProblemaGeneral;
            oMatriz.DetalleMat = detalleMatriz;

            return oMatriz;

        }
    }
}
