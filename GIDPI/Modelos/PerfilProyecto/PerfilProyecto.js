ManualApp.controller('PerfilProyectoController',
    ['$scope', '$rootScope', '$location', 'PerfilProyectoService', '$cookies', '$cookieStore', 'MenuService', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, PerfilProyectoService, $cookies, $cookieStore, MenuService, $routeParams, $sce) {

            $("#containerNombre").hide();
            $scope.ocultarPerilProyecto = function () {
                $("#containerNombre").show();
                $("#containerPerfilProyect").hide();
                


            }
            $scope.ocultarNombre = function () {
                $("#containerNombre").hide();
                $("#containerPerfilProyect").show();



            }


        }])