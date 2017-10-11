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

            SqlDataSource1.SelectParameters["IdProyecto"].DefaultValue = "66";
            SqlDataSource2.SelectParameters["IdProyecto"].DefaultValue = "66";
            SqlDataSource3.SelectParameters["IdProyecto"].DefaultValue = "66";
            SqlDataSource4.SelectParameters["IdProyecto"].DefaultValue = "66";
            SqlDataSource5.SelectParameters["IdProyecto"].DefaultValue = "66";
            SqlDataSource6.SelectParameters["IdProyecto"].DefaultValue = "66";
            //SqlDataSource2.SelectParameters["IdProyecto"].DefaultValue = IdProyecto;

        }
    }
}