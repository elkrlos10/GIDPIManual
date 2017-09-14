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

         
            //FUNCIÓN PARA AGREGAR MAS FILAS DE INVOLUCRADOS
            $scope.AgregarCampos1 = function () {

                    $scope.Involucrados.push({
                        IdProyecto: $rootScope.proyecto.datos.id,
                        Involucrado: "",
                        Interes: "",
                        Problema: "",
                        Recursos: "",
                        Estrategia: ""
                    });
            };

            //FUNCIÓN PARA ELIMINAR FILAS DE INVOLUCRADOS
            $scope.EliminarCampos = function () {
                if ($scope.Involucrados[($scope.Involucrados.length - 1)].Involucrado == "" && $scope.Involucrados[($scope.Involucrados.length - 1)].Interes == ""
                    && $scope.Involucrados[($scope.Involucrados.length - 1)].Problema == "" && $scope.Involucrados[($scope.Involucrados.length - 1)].Recursos == ""
                    && $scope.Involucrados[($scope.Involucrados.length - 1)].Estrategia == "") {

                    if ($scope.Involucrados.length > 1) {
                        $scope.Involucrados.splice(($scope.Involucrados.length - 1), 1);
                    }
                }

            };

         
            //FUNCIÓN PARA GUARDAR INVOLUCRADOS
            $scope.GuardarInvolucrados = function () {
                var contadotr = 0;
                $.each($scope.Involucrados, function (index,value) {
                    if (value.Involucrado == "" || value.Interes == "" || value.Problema == "" || value.Recursos == "" || value.Estrategia == "") {
                    
                        contadotr++;
                    }
                })

                if(contadotr==0){
                    InvolucradosService.GuardarInvolucrados($scope.Involucrados, function (response) {
                        if (response.success) {
                            swal({
                                text: 'Registro Exitoso',
                                confirmButtonColor: '#238276',
                                width: '25%'

                            })
                       
                            $location.url("/Menu");
                        }
                    })
                } else {
                    alertify.success("Ups! Faltan campos por completar");
                    return;
                }
         

                
            }

            //FUNCIÓN PARA CONSULTAR INVOLUCRADOS
            InvolucradosService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                if (response.success) {
                    $rootScope.proyecto.datos.Etapa = response.proyecto.Etapa;

                    if ($rootScope.proyecto.datos.Etapa >= 6) {
                        InvolucradosService.ConsultarInvolucrados($rootScope.proyecto.datos.id, function (response) {
                            if (response.success) {
                                $scope.Involucrados = response.involucrados;
                               

                            }

                        })
                    }
                }
            })

            $scope.atras = function () {

                $location.url("/Menu");
                $(".notify").hide();
            }

        }]);