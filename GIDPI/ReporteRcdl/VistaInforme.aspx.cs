using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace GIDPI.ReporteRcdl
{
    public partial class VistaInforme : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var IdProyecto = Request.QueryString["IdProyecto"];

            SqlDataSource1.SelectParameters["IdProyecto"].DefaultValue = IdProyecto;
            //SqlDataSource2.SelectParameters["IdProyecto"].DefaultValue = IdProyecto;

        }
    }
}