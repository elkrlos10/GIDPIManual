ManualApp.controller('MarcoLogicoController',
    ['$scope', '$rootScope', '$location', 'MarcoLogicoService', '$cookies', '$cookieStore', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, MarcoLogicoService, $cookies, $cookieStore, $routeParams, $sce) {
            
            $("#ContainerFinal ").hide();
            //$("#ContainerFinal").hide();
            $("#btnFinalizar").hide();
            $("#btnEditarMarco").hide();
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
                console.log($scope.Marco);
                $scope.Marco.IdProyecto = $rootScope.proyecto.datos.id;
                if ($scope.Marco.Fin1==null|| $scope.Marco.Fin2==null || $scope.Marco.Fin3 == null  || $scope.Marco.Fin4 == null 
                   || $scope.Marco.Proposito1 == null || $scope.Marco.Proposito2 == null || $scope.Marco.Proposito3 == null || $scope.Marco.Proposito4 == null
                    || $scope.Marco.Resultado1 == null || $scope.Marco.Resultado2 == null || $scope.Marco.Resultado3 == null || $scope.Marco.Resultado4 == null
                     || $scope.Marco.Actividad1 == null || $scope.Marco.Actividad2 == null || $scope.Marco.Actividad2 == null || $scope.Marco.Actividad4 == null
                    || $scope.Marco.Fin1 == "" || $scope.Marco.Fin2 == "" || $scope.Marco.Fin3 == "" || $scope.Marco.Fin4 == ""
                   || $scope.Marco.Proposito1 == "" || $scope.Marco.Proposito2 == "" || $scope.Marco.Proposito3 == "" || $scope.Marco.Proposito4 == ""
                    || $scope.Marco.Resultado1 == "" || $scope.Marco.Resultado2 == "" || $scope.Marco.Resultado3 == "" || $scope.Marco.Resultado4 == ""
                     || $scope.Marco.Actividad1 == "" || $scope.Marco.Actividad2 == "" || $scope.Marco.Actividad2 == "" || $scope.Marco.Actividad4 == ""

                    ) {
                    alertify.success("Ups! Faltan campos por completar");
                    return false;
                } else {
                    MarcoLogicoService.GuardarMarco($scope.Marco, function (response) {

                        if (response.success) {
                            swal({
                                text: 'Registro Exitoso',
                                confirmButtonColor: '#238276',
                                width: '25%'

                            })

                            
                            $("#btnFinalizar").show();
                            $("#btnGuardarMarco").hide();
                            $("#btnEditarMarco").show();
                            //$location.url("/Menu");
                        }
                    })
                   
                }
               
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
                                $("#btnFinalizar").show();
                                $("#btnEditarMarco").show();
                                $("#btnGuardarMarco").hide();
                                $scope.Marco = response.marco;
                            }
                        })
                    }
                }
            })

            $scope.Finalizar = function() {
                $("#containerMarcoLogico ").hide();
                $("#ContainerFinal ").show();
            }



            $scope.Regresar = function () {

                $location.url("/Menu");

            }

            $scope.sacarArbol= function () {
             
            }

           



        }]);