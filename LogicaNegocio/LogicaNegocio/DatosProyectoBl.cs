using Datos;
using Datos.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace LogicaNegocio.LogicaNegocio
{
    public class DatosProyectoBl
    {
        Model1 entity = new Model1();

        public List<Departamento> ConsultarDepartamentos()
        {
                var departamentos = (from i in entity.Departamento
                                     select i).ToList();

                return departamentos;
        }

        public List<Municipio> ConsultarMunicipiosDepartamento(int IdDepartamento)
        {
            var municipios = (from i in entity.Municipio
                              where i.IdDepartamento == IdDepartamento
                              select i).ToList();

            return municipios;

        }

        public Departamento ConsultarDepartamentoxMunicipio(int IdMunicipio)
        {
            var Departamento = (from i in entity.Departamento
                                join m in entity.Municipio on i.IdDepartamento equals m.IdDepartamento
                                 where m.IdMunicipio == IdMunicipio
                                select i).FirstOrDefault();

            return Departamento;

        }

        public Proyecto GuardarDatosProyecto(Proyecto oProyecto )
        {

            entity.Proyecto.Add(oProyecto);
            entity.SaveChanges();

            var proyecto = (from i in entity.Proyecto
                            orderby i.IdProyecto descending
                            select i).FirstOrDefault();

            return proyecto;

        }

        public void ModificarProyecto(Proyecto oProyecto)
        {
            var proyecto = (from i in entity.Proyecto
                            where i.IdProyecto == oProyecto.IdProyecto
                            select i).FirstOrDefault();

            proyecto.TipoProyecto = oProyecto.TipoProyecto;
            proyecto.AccionProyecto = oProyecto.AccionProyecto;
            proyecto.TemaProyecto = oProyecto.TemaProyecto;
            proyecto.IdMunicipio = oProyecto.IdMunicipio;
            proyecto.Sector = proyecto.Sector;
            entity.SaveChanges();

        }

        public List<Proyecto> ConsultarProyectos(int IdUsuario)
        {

            var proyectos = (from i in entity.Proyecto
                            where i.IdUsuario == IdUsuario
                            orderby i.IdProyecto descending
                            select i).ToList();

            return proyectos;

        }
    }
}
