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

    }
}
