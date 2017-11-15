ManualApp.controller('ReporteController',
    ['$scope', '$rootScope', '$location', 'CronogramaPresupuestoService', '$cookies', '$cookieStore', 'MenuService', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, CronogramaPresupuestoService, $cookies, $cookieStore, MenuService, $routeParams, $sce, $interval) {

            //$scope.reportServiceUrl = 'http://js.syncfusion.com/ejservices/api/ReportViewer';
            //$scope.remoteMode = ej.ReportViewer.ProcessingMode.Remote;
            //$scope.rdlReportPath = 'GroupingAgg.rdl';

            var IdProyecto = $rootScope.proyecto.datos.id;
            console.log(IdProyecto);
            $scope.url = $sce.trustAsResourceUrl('http://localhost:61609/ReporteRcdl/VistaInforme.aspx?IdProyecto=' + IdProyecto);

            //var IdProyecto = $rootScope.proyecto.datos.id;
            //console.log(IdProyecto);
            //$scope.url = $sce.trustAsResourceUrl('https://www.gidpi.com/ReporteRcdl/VistaInforme.aspx?IdProyecto=' + IdProyecto);
     
        }]);