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
            SqlDataSource2.SelectParameters["IdProyecto"].DefaultValue = IdProyecto;
            SqlDataSource3.SelectParameters["IdProyecto"].DefaultValue = IdProyecto;
            SqlDataSource4.SelectParameters["IdProyecto"].DefaultValue =IdProyecto;
            SqlDataSource5.SelectParameters["IdProyecto"].DefaultValue = IdProyecto;
            SqlDataSource6.SelectParameters["IdProyecto"].DefaultValue = IdProyecto;
            SqlDataSource7.SelectParameters["IdProyecto"].DefaultValue = IdProyecto;
            SqlDataSource8.SelectParameters["IdProyecto"].DefaultValue = IdProyecto;
            SqlDataSource9.SelectParameters["IdProyecto"].DefaultValue = IdProyecto;
            SqlDataSource10.SelectParameters["IdProyecto"].DefaultValue =IdProyecto;
            SqlDataSource11.SelectParameters["IdProyecto"].DefaultValue =IdProyecto;
            SqlDataSource12.SelectParameters["IdProyecto"].DefaultValue =IdProyecto;
            SqlDataSource13.SelectParameters["IdProyecto"].DefaultValue = IdProyecto;
            //SqlDataSource2.SelectParameters["IdProyecto"].DefaultValue = IdProyecto;

        }
    }
}