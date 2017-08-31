using Datos.DTO;
using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogicaNegocio.LogicaNegocio
{
    public class PerfilProyectoBL
    {

        Model1 entity = new Model1();
        public ProyectoDTO ConsultarProyecto(int IdProyecto)
        {
            var Proyecto = (from i in entity.Proyecto
                            where i.IdProyecto == IdProyecto
                            select i).FirstOrDefault();

            var municipio = (from i in entity.Municipio
                             where i.IdMunicipio == Proyecto.IdMunicipio
                             select i).FirstOrDefault();

            ProyectoDTO oProyectoDTO = new ProyectoDTO();

            oProyectoDTO.IdProyecto = Proyecto.IdProyecto;
            oProyectoDTO.TemaProyecto = Proyecto.TemaProyecto;
            oProyectoDTO.municipio = municipio.NombreMunicipio;
            oProyectoDTO.TipoProyecto = Proyecto.TipoProyecto;
            oProyectoDTO.Sector = Proyecto.Sector;
            oProyectoDTO.Etapa = Proyecto.Etapa;
            oProyectoDTO.IdUsuario = Proyecto.IdUsuario;
            oProyectoDTO.AccionProyecto = Proyecto.AccionProyecto;
            oProyectoDTO.NombreProyecto = Proyecto.AccionProyecto + " " + Proyecto.TemaProyecto + " " + municipio.NombreMunicipio;

            return oProyectoDTO;

        }

        public void GuardarPerfilProyecto(PerfilProyecto perfilProyecto)
        {
            PerfilProyecto obj = new PerfilProyecto();
            obj = perfilProyecto;
            entity.PerfilProyecto.Add(obj);
            entity.SaveChanges();
            var proyecto = (from i in entity.Proyecto
                            where i.IdProyecto == perfilProyecto.IdProyecto
                            select i).FirstOrDefault();
            proyecto.Etapa = 7;
           


        }

        public PerfilProyecto ConsultarPerfilTerminado(int IdProyecto)
        {
            var perfil = (from i in entity.PerfilProyecto
                          where i.IdProyecto == IdProyecto
                          select i).FirstOrDefault();

            return perfil;

        }

        public void EditarPerfilProyecto(PerfilProyecto PerfilProyecto)
        {
            var editar = (from i in entity.PerfilProyecto
                          where i.idPerfilProyecto == PerfilProyecto.idPerfilProyecto
                          select i).FirstOrDefault();

            editar.NombreProyecto = PerfilProyecto.NombreProyecto;
            editar.NombreArea = PerfilProyecto.NombreArea;
            editar.NumeroProyecto = PerfilProyecto.NumeroProyecto;
            editar.Justificacion = PerfilProyecto.Justificacion;
            entity.SaveChanges();
               
        }

    }
}
