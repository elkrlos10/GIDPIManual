ManualApp.controller('ReporteController',
    ['$scope', '$rootScope', '$location', 'CronogramaPresupuestoService', '$cookies', '$cookieStore', 'MenuService', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, CronogramaPresupuestoService, $cookies, $cookieStore, MenuService, $routeParams, $sce, $interval) {

            $scope.reportServiceUrl = 'http://js.syncfusion.com/ejservices/api/ReportViewer';
            $scope.remoteMode = ej.ReportViewer.ProcessingMode.Remote;
            $scope.rdlReportPath = 'GroupingAgg.rdl';

     
        }]);