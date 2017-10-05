<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="VistaInforme.aspx.cs" Inherits="GIDPI.ReporteRcdl.VistaInforme" %>

<%@ Register assembly="Microsoft.ReportViewer.WebForms, Version=12.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" namespace="Microsoft.Reporting.WebForms" tagprefix="rsweb" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
    </div>
        <asp:ScriptManager ID="ScriptManager1" runat="server">
        </asp:ScriptManager>
        <rsweb:ReportViewer ID="ReportViewer1" runat="server" Font-Names="Verdana" Font-Size="8pt" Height="502px" WaitMessageFont-Names="Verdana" WaitMessageFont-Size="14pt" Width="637px">
            <LocalReport ReportPath="ReporteRcdl\Informe\InformeProyecto.rdlc">
                <DataSources>
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource1" Name="DataSet1" />
                </DataSources>
            </LocalReport>
        </rsweb:ReportViewer>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ManualDBConnectionString %>" SelectCommand="cargarProyecto" SelectCommandType="StoredProcedure">
            <SelectParameters>
                <asp:Parameter Name="IdProyecto" Type="Int32" />
            </SelectParameters>
        </asp:SqlDataSource>
    </form>
</body>
</html>
