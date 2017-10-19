<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="VistaInforme.aspx.cs" Inherits="GIDPI.ReporteRcdl.VistaInforme" %>

<%@ Register assembly="Microsoft.ReportViewer.WebForms, Version=12.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" namespace="Microsoft.Reporting.WebForms" tagprefix="rsweb" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
   
    <form id="form1" runat="server" >
     <center>
        <asp:ScriptManager ID="ScriptManager1" runat="server">
        </asp:ScriptManager>
        
        <rsweb:ReportViewer ID="ReportViewer1" runat="server" Font-Names="Verdana"  Font-Size="8pt" Height="778px" WaitMessageFont-Names="Verdana" WaitMessageFont-Size="14pt" Width="42%" BackColor="#238276" InternalBorderColor="Aqua" ViewStateMode="Enabled" RightToLeft="YES" Enabled="False" EnableTheming="False" ExportContentDisposition="AlwaysInline" InternalBorderWidth="0px" ZoomMode="FullPage" DocumentMapWidth="80%" LinkDisabledColor="White" SizeToReportContent="True" style="margin-right: 0px" ZoomPercent="150" CssClass="aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled aspNetDisabled" PageCountMode="Actual" PromptAreaCollapsed="True" BorderColor="Black" BorderStyle="None" ToolBarItemBorderWidth="10px">
           
             <LocalReport  ReportPath="ReporteRcdl\Informe\InformeProyecto.rdlc">
                <DataSources>
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource1" Name="DataSet1" />
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource2" Name="DataSet2" />
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource3" Name="DataSet3" />
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource4" Name="DataSet4" />
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource5" Name="DataSet5" />
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource6" Name="DataSet6" />
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource7" Name="ArbolProblema" />
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource8" Name="arbolObjetivos" />
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource9" Name="OBjetivosEspecificos" />
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource10" Name="Resultados" />
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource11" Name="cronograma" />
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource12" Name="Presupuesto" />
                    <rsweb:ReportDataSource DataSourceId="SqlDataSource13" Name="MarcoLogico" />
                </DataSources>
            </LocalReport>
           
        </rsweb:ReportViewer>
         <asp:SqlDataSource ID="SqlDataSource13" runat="server" ConnectionString="<%$ ConnectionStrings:ManualDBConnectionString %>" SelectCommand="cargarMatrizMarco" SelectCommandType="StoredProcedure">
             <SelectParameters>
                 <asp:Parameter Name="IdProyecto" Type="Int32" />
             </SelectParameters>
         </asp:SqlDataSource>
         <asp:SqlDataSource ID="SqlDataSource12" runat="server" ConnectionString="<%$ ConnectionStrings:ManualDBConnectionString %>" SelectCommand="cargarPresupuesto" SelectCommandType="StoredProcedure">
             <SelectParameters>
                 <asp:Parameter Name="IdProyecto" Type="Int32" />
             </SelectParameters>
         </asp:SqlDataSource>
         <asp:SqlDataSource ID="SqlDataSource11" runat="server" ConnectionString="<%$ ConnectionStrings:ManualDBConnectionString %>" SelectCommand="cargarCronograma" SelectCommandType="StoredProcedure">
             <SelectParameters>
                 <asp:Parameter Name="IdProyecto" Type="Int32" />
             </SelectParameters>
         </asp:SqlDataSource>
         <asp:SqlDataSource ID="SqlDataSource10" runat="server" ConnectionString="<%$ ConnectionStrings:ManualDBConnectionString %>" SelectCommand="ConsultarResultados" SelectCommandType="StoredProcedure">
             <SelectParameters>
                 <asp:Parameter Name="IdProyecto" Type="Int32" />
             </SelectParameters>
         </asp:SqlDataSource>
         <asp:SqlDataSource ID="SqlDataSource9" runat="server" ConnectionString="<%$ ConnectionStrings:ManualDBConnectionString %>" SelectCommand="ConsultarObjetivosEspecificos" SelectCommandType="StoredProcedure">
             <SelectParameters>
                 <asp:Parameter Name="IdProyecto" Type="Int32" />
             </SelectParameters>
         </asp:SqlDataSource>
         <asp:SqlDataSource ID="SqlDataSource8" runat="server" ConnectionString="<%$ ConnectionStrings:ManualDBConnectionString %>" SelectCommand="cargarArbolObjetivos" SelectCommandType="StoredProcedure">
             <SelectParameters>
                 <asp:Parameter Name="IdProyecto" Type="Int32" />
             </SelectParameters>
         </asp:SqlDataSource>
         <asp:SqlDataSource ID="SqlDataSource7" runat="server" ConnectionString="<%$ ConnectionStrings:ManualDBConnectionString %>" SelectCommand="ConsultaArbolProblema" SelectCommandType="StoredProcedure">
             <SelectParameters>
                 <asp:Parameter Name="idProyecto" Type="Int32" />
             </SelectParameters>
         </asp:SqlDataSource>
         <asp:SqlDataSource ID="SqlDataSource6" runat="server" ConnectionString="<%$ ConnectionStrings:ManualDBConnectionString %>" SelectCommand="cargarPerfilDeProyecto" SelectCommandType="StoredProcedure">
             <SelectParameters>
                 <asp:Parameter Name="IdProyecto" Type="Int32" />
             </SelectParameters>
         </asp:SqlDataSource>
         <asp:SqlDataSource ID="SqlDataSource5" runat="server" ConnectionString="<%$ ConnectionStrings:ManualDBConnectionString %>" SelectCommand="cargarNombreDeProyecto" SelectCommandType="StoredProcedure">
             <SelectParameters>
                 <asp:Parameter Name="IdProyecto" Type="Int32" />
             </SelectParameters>
         </asp:SqlDataSource>
         <asp:SqlDataSource ID="SqlDataSource4" runat="server" ConnectionString="<%$ ConnectionStrings:ManualDBConnectionString %>" SelectCommand="cargar_Objetivos" SelectCommandType="StoredProcedure">
             <SelectParameters>
                 <asp:Parameter Name="idProyecto" Type="Int32" />
             </SelectParameters>
         </asp:SqlDataSource>
         <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:ManualDBConnectionString %>" SelectCommand="cargarInvolucrados" SelectCommandType="StoredProcedure">
             <SelectParameters>
                 <asp:Parameter Name="idProyecto" Type="Int32" />
             </SelectParameters>
         </asp:SqlDataSource>
         <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:ManualDBConnectionString %>" SelectCommand="cargarMatriz" SelectCommandType="StoredProcedure">
             <SelectParameters>
                 <asp:Parameter Name="IdProyecto" Type="Int32" />
             </SelectParameters>
         </asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ManualDBConnectionString %>" SelectCommand="cargarProyecto" SelectCommandType="StoredProcedure">
            <SelectParameters>
                <asp:Parameter Name="IdProyecto" Type="Int32" />
            </SelectParameters>
        </asp:SqlDataSource>
     </center>
    </form>
    
</body>
</html>
