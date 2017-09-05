ManualApp.controller('CronogramaPresupuestoController',
    ['$scope', '$rootScope', '$location', 'CronogramaPresupuestoService', '$cookies', '$cookieStore', 'MenuService', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, CronogramaPresupuestoService, $cookies, $cookieStore, MenuService, $routeParams, $sce) {

            $("#containerPresupuesto").hide();



            $scope.Cronograma = [{
                IdProyecto: $rootScope.proyecto.datos.id,
                Actividad: "",
                FechaInicio: "",
                FechaFin: ""
            }]


            $scope.Presupuesto = [{
                IdProyecto: $rootScope.proyecto.datos.id,
                Item: "",
                Concepto: "",
                Descripcion: "",
                Unidad: "",
                Cantidad: "",
                ValorUnitario: "",
                ValorTotal:""

            }]

         

            




            $scope.MostrarCronograma = function () {
                $("#containerCronograma").show();
                $("#containerPresupuesto").hide();
            }


            $scope.MostrarPresupuesto = function () {
                $("#containerCronograma").hide();
                $("#containerPresupuesto").show();
                
            }

            $scope.agregarCronograma = function (index) {

                //$("#FechaInicio0").remove();

                $scope.Cronograma.push({
                    IdProyecto: $rootScope.proyecto.datos.id,
                    Actividad: "",
                    FechaInicio: "",
                    FechaFin: ""
                })
            }


            var update = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

            function repetir() {

                $('.FI').datepicker({
                    language: 'es',
                    autoclose: true,
                    //daysOfWeekDisabled: [0]
                });

                $('.FE').datepicker({
                    language: 'es',
                    autoclose: true,
                    //daysOfWeekDisabled: [0]
                });


                update(repetir); //entra en la funcion repetir sin salir de la misma, asi crea un ciclo infinito
            }
            update(repetir);



            $scope.agregarPresupuesto = function () {
                $scope.Presupuesto.push({
                    IdProyecto: $rootScope.proyecto.datos.id,
                    Item: "",
                    Concepto: "",
                    Descripcion: "",
                    Unidad: "",
                    Cantidad: "",
                    ValorUnitario: "",
                    ValorTotal: ""
                })

            }
            $scope.GuardarCronograma = function () {

                console.log($scope.Cronograma)
                CronogramaPresupuestoService.GuardarCronograma($scope.Cronograma, function (response) {
                    if (response.success) {
                        alertify.alert("<b>Registro Exitoso</b>");


                    }
                })
            }

            CronogramaPresupuestoService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                if (response.success) {
                    $rootScope.proyecto.datos.Etapa = response.proyecto.Etapa;

                    if ($rootScope.proyecto.datos.Etapa >= 8) {
                        CronogramaPresupuestoService.ConsultarCronograma($rootScope.proyecto.datos.id, function (response) {
                            if (response.success) {
                                $scope.Cronograma = response.Cronograma;
                            

                            }

                        })
                    }
                }
            })

    
                
            $scope.total = 0;

            $scope.CalcularValorTotal = function() {
                //$scope.Presupuesto[0].ValorTotal = $scope.Presupuesto[0].Cantidad * $scope.Presupuesto[0].ValorUnitario;
                 $scope.total = 0;
                $.each($scope.Presupuesto, function (index, value){
                    value.ValorTotal= value.Cantidad * value.ValorUnitario;
                    $scope.total = value.ValorTotal + $scope.total;
                })
               

            }


            $scope.GuardarPresupuesto = function () {
                $scope.Presupuesto1 = [];
                $.each($scope.Presupuesto, function (index, value) {

                    $scope.Presupuesto1.push({
                        IdProyecto: $rootScope.proyecto.datos.id,
                        Item: value.Item,
                        Concepto: value.Concepto,
                        Descripcion: value.Descripcion,
                        Unidad: value.Unidad,
                        Cantidad: value.Cantidad,
                        ValorUnitario: value.ValorUnitario
                        
                    }) 

                })

                console.log($scope.Presupuesto1);
                CronogramaPresupuestoService.GuardarPresupuesto($scope.Presupuesto1, function (response) {
                    if (response.success) {
                        alertify.alert("<b>Registro Exitoso</b>");


                    }
                })
            }

            CronogramaPresupuestoService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                if (response.success) {
                    $rootScope.proyecto.datos.Etapa = response.proyecto.Etapa;

                    if ($rootScope.proyecto.datos.Etapa >= 9) {
                        CronogramaPresupuestoService.ConsultarPresupuesto($rootScope.proyecto.datos.id, function (response) {
                            if (response.success) {
                                $scope.total = 0;
                                $scope.Presupuesto = [];

                                $scope.Presupuesto = response.Presupuesto;
                                $.each($scope.Presupuesto, function (index, value) {
                                    value.ValorTotal = value.Cantidad * value.ValorUnitario;
                                    $scope.total = value.ValorTotal + $scope.total;

                                })
                                console.log(response.Presupuesto);
                      
                            }

                        })
                    }
                }
            })






        }]);