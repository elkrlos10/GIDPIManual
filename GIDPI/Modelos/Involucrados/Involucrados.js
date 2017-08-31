ManualApp.controller('InvolucradosController',
    ['$scope', '$rootScope', '$location', 'InvolucradosService', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, InvolucradosService, $routeParams, $sce) {

            $scope.Involucrados = [{
                IdProyecto:$rootScope.proyecto.datos.id,
                Involucrado: "",
                Interes: "",
                Problema: "",
                Recursos: "",
                Estrategia: ""
              
            }]

            console.log($scope.Involucrados);

            $scope.AgregarCampos1 = function () {

                    $scope.Involucrados.push({
                        IdProyecto: $rootScope.proyecto.datos.id,
                        Involucrado: ""
                        
                    });

            };
            $scope.EliminarCampos = function () {
                
                if ($scope.Involucrados.length > 1) {
                    $scope.Involucrados.splice(($scope.Involucrados.length-1), 1);
                }

            };

         

            $scope.GuardarInvolucrados = function() {
                InvolucradosService.GuardarInvolucrados($scope.Involucrados, function (response) {
                    if (response.success) {
                        alert("bien");
                    }
                })
            }

            InvolucradosService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                if (response.success) {
                    $rootScope.proyecto.datos.Etapa = response.proyecto.Etapa;

                    if ($rootScope.proyecto.datos.Etapa >= 6) {
                        InvolucradosService.ConsultarInvolucrados($rootScope.proyecto.datos.id, function (response) {
                            if (response.success) {
                                $scope.Involucrados = response.involucrados;
                                console.log($scope.Involucrados);
                                //$("#guardarInvo").hide();
                                //$("#botonCampos").hide();
                                //$("#botonQuitar").hide();

                            }

                        })
                    }
                }
            })

        }]);