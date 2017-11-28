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

            $scope.PauseAudio = function () {
                setTimeout(function () {
                    var audio = document.getElementById("audio-player");
                    audio.pause();
                }, 1000);

                setTimeout(function () {
                    var audio = document.getElementById("audio-player1");
                    audio.pause();
                }, 1000);
            }

           
            $scope.MostrarCronograma = function () {
                $("#containerCronograma").show();
                $("#containerPresupuesto").hide();
                $('#audioAyudaOnce').css("display", "none");
                var audio1 = document.getElementById("audio-player1");
                audio1.pause();
            }

            $scope.MostrarPresupuesto = function () {
                $("#containerCronograma").hide();
                $("#containerPresupuesto").show();
                $('#audioAyudaDiez').css("display", "none");
                var audio = document.getElementById("audio-player");
                audio.pause();
            }

            $scope.agregarCronograma = function (index) {

                //$("#FechaInicio0").remove();
                if ($scope.Cronograma.length >= 15) {
                    swal({
                        text: 'EL maximo de actividad es de 15',
                        type: 'warning',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                    return false;
                }

                $scope.Cronograma.push({
                    IdProyecto: $rootScope.proyecto.datos.id,
                    Actividad: "",
                    FechaInicio: "",
                    FechaFin: ""
                })
            }

            $scope.EliminarCamposCrononograma = function () {
                   



                if ($scope.Cronograma.length > 1) {
                    console.log($scope.Cronograma);
                    if ($scope.Cronograma[$scope.Cronograma.length - 1].IdCronograma == undefined) {
                        $scope.Cronograma.splice(($scope.Cronograma.length - 1), 1);
                    } else {
                        swal({
                            title: '¿Esta seguro?',
                            text: "¿Esta seguro de eliminar la ultima actividad?",
                            type: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#238276',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Si, Eliminar',
                            cancelButtonText: 'No, Cancelar!',
                            confirmButtonClass: 'btn btn-success',
                            cancelButtonClass: 'btn btn-danger',
                            //preConfirm: function () {

                            //}

                        }).then(function () {
                            CronogramaPresupuestoService.eliminarItemCronograma( $scope.Cronograma[$scope.Cronograma.length -1 ].IdCronograma, function (response) {
                                if (response.success) {
                                    swal({

                                        confirmButtonColor: '#238276',
                                        title: 'Borrado!',
                                        text: 'se borro la ultima actividad',
                                        type: 'success'
                                    }).then(function () {
                                    })

                                    $scope.Cronograma.splice(($scope.Cronograma.length - 1), 1);
                                   
                                } else {
                                    alert("salio mal");
                                }
                            })
                        }), function (dismiss) {
                            // dismiss can be 'cancel', 'overlay',
                            // 'close', and 'timer'
                            if (dismiss === 'cancel') {
                                swal({
                                    confirmButtonColor: '#238276',
                                    title: 'Eliminado',
                                    text: 'El proyecto ha sido eliminado!',
                                    type: 'error',
                                })
                            }
                        }
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
                var cantidadString = "";
                var errorFechas = "";
                $.each($scope.Cronograma, function (index, value) {
                    cantidadString += value.Actividad;
                    if (value.Actividad == "" || value.FechaInicio == "" || value.FechaFin == "" ) {
                        cont++;
                    } else {
                        var x = value.FechaInicio.split('/');
                        var y = value.FechaFin.split('/');
                        var StartDate = x[1] + "-" + x[2] + "-" + x[0];
                        var EndDate = y[1] + "-" + y[2] + "-" + y[0];
                        if (Date.parse(StartDate) > Date.parse(EndDate)) {
                            swal({
                                text: 'La fecha inicio número: ' + (index+1) + ' es mayor a la fecha final',
                                confirmButtonColor: '#238276',
                                width: '25%',
                                allowOutsideClick: false
                            })
                            errorFechas += ' - ' + (index + 1).toString() + '\n';
                        }
                    }
                })
                if (cont == 0) {
                    //if (errorFechas.length > 15) {
                    //    swal({
                    //        text: 'EL maximo de actividad es de 15',
                    //        type: 'warning',
                    //        confirmButtonColor: '#238276',
                    //        width: '25%',
                    //        allowOutsideClick: false

                    //    })
                    //    return false;
                    //}
                    if (errorFechas!="") {
                        swal({
                            title:'Error fechas',
                            text: "La fecha inicio de las posiciones:  " + errorFechas + " sobrepasan la fecha final.",
                            confirmButtonColor: '#238276',
                            width: '25%',
                            allowOutsideClick: false

                        })
                        return false;
                    }
                    
                    CronogramaPresupuestoService.GuardarCronograma($scope.Cronograma, function (response) {
                        if (response.success) {
                            swal({
                                text: 'Registro Exitoso',
                                confirmButtonColor: '#238276',
                                width: '25%'
                            })
                            $("#btnPresupuesto").removeAttr("disabled", "disabled");
                            $("#containerPresupuesto").show();
                            $("#containerCronograma").hide();
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
                        $("#btnPresupuesto").removeAttr("disabled", "disabled");
                        CronogramaPresupuestoService.ConsultarCronograma($rootScope.proyecto.datos.id, function (response) {

                            if (response.success) {
                                $scope.Cronograma = response.Cronograma;
                                console.log($scope.Cronograma)

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
                    iva = parseFloat(ivaString) * U;
                    $scope.IvaUtilidad = iva;
                    if ($scope.IvaUtilidad == 0) {
                        $scope.AIU.Iva = "";
                    } else {
                        $scope.IvaUtilidad = iva;
                    }
                   
                } else {
                    ivaString = "0." + ($scope.AIU.Iva);
                    iva = parseFloat(ivaString) * U;
                    $scope.IvaUtilidad = iva;
                   
                    if ($scope.IvaUtilidad == 0) {
                        $scope.AIU.Iva = "";
                } else {
                        $scope.IvaUtilidad = iva;
            }
                }

                $scope.A = A.toFixed(2);
                $scope.I = I.toFixed(2);
                $scope.U = U.toFixed(2);
                $scope.Subtotal = $scope.total.toFixed(2);
                $scope.total = ($scope.total  + A + I + U).toFixed(2);

            }

            $scope.GuardarPresupuesto = function () {
                $scope.Presupuesto1 = [];

                var contador1 = 0;
                $.each($scope.Presupuesto, function (index, value) {
                    console.log($scope.Presupuesto.ValorUnitario);
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

                    if ($rootScope.proyecto.datos.Etapa >= 10) {

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
                                        //$scope.total = $scope.AIU.ValorTotal;
                                        $scope.CalcularValorTotal();

                                    }

                                })

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