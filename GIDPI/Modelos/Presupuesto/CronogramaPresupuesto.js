ManualApp.controller('CronogramaPresupuestoController',
    ['$scope', '$rootScope', '$location', 'CronogramaPresupuestoService', '$cookies', '$cookieStore', 'MenuService', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, CronogramaPresupuestoService, $cookies, $cookieStore, MenuService, $routeParams, $sce) {

            $("#containerPresupuesto").hide();
            $("#btnPresupuesto").attr("disabled", "disabled");
         

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
                ValorTotal: ""

            }]


            $scope.AIU = {
                A: "",
                I: "",
                U: "",
                Iva: "",
                ValorTotal: "",
                IdProyecto: ""
            }

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


            $scope.EliminarCamposCrononograma = function () {

                if ($scope.Cronograma[($scope.Cronograma.length - 1)].Actividad == "" && $scope.Cronograma[($scope.Cronograma.length - 1)].FechaInicio == ""
                    && $scope.Cronograma[($scope.Cronograma.length - 1)].FechaFin == "") {

                    if ($scope.Cronograma.length > 1) {
                        $scope.Cronograma.splice(($scope.Cronograma.length - 1), 1);
                    }
                }

            };


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




            $scope.EliminarCamposPresupuesto = function () {

                if ($scope.Presupuesto[($scope.Presupuesto.length - 1)].Item == "" && $scope.Presupuesto[($scope.Presupuesto.length - 1)].Concepto == ""
                    && $scope.Presupuesto[($scope.Presupuesto.length - 1)].Descripcion == "" && $scope.Presupuesto[($scope.Presupuesto.length - 1)].Unidad == ""
                     && $scope.Presupuesto[($scope.Presupuesto.length - 1)].Cantidad == "" && $scope.Presupuesto[($scope.Presupuesto.length - 1)].ValorUnitario == "" && $scope.Presupuesto[($scope.Presupuesto.length - 1)].ValorTotal == "") {

                    if ($scope.Presupuesto.length > 1) {
                        $scope.Presupuesto.splice(($scope.Presupuesto.length - 1), 1);
                    }
                }

            };

            $scope.GuardarCronograma = function () {
                var cont = 0;
            



                $.each($scope.Cronograma, function (index, value) {
                    if (value.Actividad == "" || value.FechaInicio == "" || value.FechaFin == "" ) {

                        cont++;
                    }

                })
                if (cont == 0) {

                    
                    //CronogramaPresupuestoService.GuardarCronograma($scope.Cronograma, function (response) {
                    //    if (response.success) {
                    //        swal({
                    //            text: 'Registro Exitoso',
                    //            confirmButtonColor: '#238276',
                    //            width: '25%'

                    //        })
                        
                    //        $("#btnPresupuesto").removeAttr("disabled", "disabled");
                    //        $("#containerPresupuesto").show();
                    //        $("#containerCronograma").hide();

                    //    }
                    //})
                } else {
                    alertify.success("Ups! Faltan campos por completar");
                    return;
                }
            }

            CronogramaPresupuestoService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                if (response.success) {
                    $rootScope.proyecto.datos.Etapa = response.proyecto.Etapa;

                    if ($rootScope.proyecto.datos.Etapa >= 8) {
                        $("#btnPresupuesto").removeAttr("disabled", "disabled");
                        CronogramaPresupuestoService.ConsultarCronograma($rootScope.proyecto.datos.id, function (response) {

                            if (response.success) {
                                $scope.Cronograma = response.Cronograma;


                            }

                        })
                    }
                }
            })



            $scope.total = 0;

            $scope.CalcularValorTotal = function () {
                //$scope.Presupuesto[0].ValorTotal = $scope.Presupuesto[0].Cantidad * $scope.Presupuesto[0].ValorUnitario;
                $scope.total = 0;
                $.each($scope.Presupuesto, function (index, value) {
                    value.ValorTotal = value.Cantidad * value.ValorUnitario;
                    $scope.total = value.ValorTotal + $scope.total;
                })

                var u = 1;
                var a = 1;
                var i = 1;
                var A = 1;
                var U = 1;
                var I = 1;


                if (parseFloat($scope.AIU.A) < 10) {

                    a = "0.0" + ($scope.AIU.A);
                    A = parseFloat(a) * $scope.total;

                } else {

                    a = "0." + ($scope.AIU.A);
                    A = parseFloat(a) * $scope.total;
                }

                if (parseFloat($scope.AIU.I) < 10) {

                    i = "0.0" + ($scope.AIU.I);
                    I = parseFloat(i) * $scope.total;

                } else {
                    i = "0." + ($scope.AIU.I);
                    I = parseFloat(i) * $scope.total;
                }


                if (parseFloat($scope.AIU.U) < 10) {

                    u = "0.0" + ($scope.AIU.U);
                    U = parseFloat(u) * $scope.total;

                } else {
                    u = "0." + ($scope.AIU.U);
                    U = parseFloat(u) * $scope.total;
                }

                if (parseFloat($scope.AIU.Iva) < 10) {

                    ivaString = "0.0" + ($scope.AIU.Iva);
                    iva = parseFloat(ivaString) * $scope.total;

                } else {
                    ivaString = "0." + ($scope.AIU.Iva);
                    iva = parseFloat(ivaString) * $scope.total;
                }

                $scope.total = ($scope.total + iva + A + I + U).toFixed(2);

            }


            $scope.GuardarPresupuesto = function () {
                $scope.Presupuesto1 = [];

                var contador1 = 0;
                $.each($scope.Presupuesto, function (index, value) {
                    
                    if (value.Item == "" || value.Concepto == "" || value.Descripcion == "" || value.Unidad=="" || value.Cantidad=="" || value.ValorUnitario=="") {
                        alertify.success("Ups! Faltan campos por completar");
                        contador1++;
                    }
                    $scope.Presupuesto1.push({
                        IdProyecto: $rootScope.proyecto.datos.id,
                        IdPresupuesto: value.IdPresupuesto,
                        Item: value.Item,
                        Concepto: value.Concepto,
                        Descripcion: value.Descripcion,
                        Unidad: value.Unidad,
                        Cantidad: value.Cantidad,
                        ValorUnitario: value.ValorUnitario

                    })

                })


               
                if (contador1 == 0) {
                    CronogramaPresupuestoService.GuardarPresupuesto($scope.Presupuesto1, function (response) {
                        if (response.success) {

                            $scope.AIU.ValorTotal = $scope.total;
                            $scope.AIU.IdProyecto = $rootScope.proyecto.datos.id;

                            CronogramaPresupuestoService.GuardarAIU($scope.AIU, function (response) {
                                if (response.success) {


                                    swal({
                                        text: 'Registro Exitoso',
                                        confirmButtonColor: '#238276',
                                        width: '25%'

                                    })

                                    $location.url("/Menu");

                                }
                            })
                        }
                    })
                } else {
                    alertify.success("Ups! Faltan campos por completar");
                    return;
                }

                
            }

            CronogramaPresupuestoService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                if (response.success) {
                    $rootScope.proyecto.datos.Etapa = response.proyecto.Etapa;

                    if ($rootScope.proyecto.datos.Etapa >= 9) {

                        CronogramaPresupuestoService.ConsultarPresupuesto($rootScope.proyecto.datos.id, function (response) {
                            if (response.success) {
                                $scope.total = 0;
                                //$scope.Presupuesto = [];

                                $scope.Presupuesto = response.Presupuesto;
                                $.each($scope.Presupuesto, function (index, value) {
                                    value.ValorTotal = value.Cantidad * value.ValorUnitario;
                                    $scope.total = value.ValorTotal + $scope.total;
                                    $scope.Presupuesto[index].Item = parseFloat(value.Item);
                                })

                                CronogramaPresupuestoService.ConsultarAIU($rootScope.proyecto.datos.id, function (response) {
                                    if (response.success) {

                                        $scope.AIU = response.AIU;
                                        $scope.total = $scope.AIU.ValorTotal;
                                    }

                                })

                            }

                        })



                    }
                }
            })


            $scope.atras = function () {

                $location.url("/Menu");

            }



        }]);