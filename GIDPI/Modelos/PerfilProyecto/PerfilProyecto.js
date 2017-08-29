ManualApp.controller('PerfilProyectoController',
    ['$scope', '$rootScope', '$location', 'PerfilProyectoService', '$cookies', '$cookieStore', 'MenuService', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, PerfilProyectoService, $cookies, $cookieStore, MenuService, $routeParams, $sce) {

            $("#containerNombre").show
            $("#containerPerfilProyect").hide();
            $scope.ocultarPerilProyecto = function () {
                $("#containerNombre").hide();
                $("#containerPerfilProyect").show();
                


            }
            $scope.ocultarNombre = function () {
                $("#containerNombre").show();
                $("#containerPerfilProyect").hide();



            }


        }])