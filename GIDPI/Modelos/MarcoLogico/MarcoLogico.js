﻿ManualApp.controller('MarcoLogicoController',
    ['$scope', '$rootScope', '$location', 'MarcoLogicoService', '$cookies', '$cookieStore', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, MarcoLogicoService, $cookies, $cookieStore, $routeParams, $sce) {

            $scope.Marco = {
                IdMarco:"", 
                IdProyecto: "",
                Actividad1 :"",
                Actividad2 :"",
                Actividad3 :"",
                Actividad4 :"",
                Resultado1 :"",
                Resultado2 :"",
                Resultado3 :"",
                Resultado4 :"",
                Proposito1 :"",
                Proposito2 :"",
                Proposito3 :"",
                Proposito4 :"",
                Fin1 :"",
                Fin2:"", 
                Fin3 :"",
                Fin4 :""
            }

            console.log($scope.Marco);

            

            $scope.guardarMarco = function () {
                $scope.Marco.IdProyecto = $rootScope.proyecto.datos.id;
                if ($scope.Marco.Fin1==""|| $scope.Marco.Fin2==null || $scope.Marco.Fin3 == null  || $scope.Marco.Fin4 == null 
                   || $scope.Marco.Proposito1 == null || $scope.Marco.Proposito2 == null || $scope.Marco.Proposito3 == null || $scope.Marco.Proposito4 == null
                    || $scope.Marco.Resultado1 == null || $scope.Marco.Resultado2 == null || $scope.Marco.Resultado3 == null || $scope.Marco.Resultado4 == null
                     || $scope.Marco.Actividad1 == null || $scope.Marco.Actividad2 == null || $scope.Marco.Actividad2 == null || $scope.Marco.Actividad4 == null
                    ) {
                    alertify.alert("<b>Faltan campos por completar</b>");
                    return false;
                } else {
                    MarcoLogicoService.GuardarMarco($scope.Marco, function (response) {

                        if (response.success) {
                            alertify.alert("<b>Registro Exitoso</b>");
                        }
                    })
                }
                $location.url("/Menu");
            }


            MarcoLogicoService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                if (response.success) {
                    $rootScope.proyecto.datos.Etapa = response.proyecto.Etapa;

                    if ($rootScope.proyecto.datos.Etapa == 9) {
                        MarcoLogicoService.LLenarMarco($rootScope.proyecto.datos.id, function (response) {

                            if (response.success) {
                                $scope.Marco = response.marco;
                            }
                        })
                    } else {
                        MarcoLogicoService.ConsultarMarco($rootScope.proyecto.datos.id, function (response) {

                            if (response.success) {
                                $scope.Marco = response.marco;
                            }
                        })
                    }
                }
            })

        }]);