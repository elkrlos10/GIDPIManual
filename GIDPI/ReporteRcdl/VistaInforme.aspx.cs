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

            //string deviceInfo = "";
            //deviceInfo = "<DeviceInfo><OutputFormat>PDF</OutputFormat> <PageWidth>21cm</PageWidth>  <PageHeight>29.7cm</PageHeight> <MarginTop>0.5cm</MarginTop>  <MarginLeft>1.1cm</MarginLeft> <MarginRight>0.5cm</MarginRight> <MarginBottom>0.5cm</MarginBottom></DeviceInfo>";
            ////ReportViewer1.ServerReport.SetParameters(parametros);
            //ReportViewer1.ServerReport.Refresh();
            //helper.ExportPdf(ReportViewer1, deviceInfo);

        }
    }
}