ManualApp.controller('MatrizController',
    ['$scope', '$rootScope', '$location', 'MatrizService', 'ArbolProblemaService','$routeParams', '$sce',
        function ($scope, $rootScope, $location, MatrizService, ArbolProblemaService, $routeParams, $sce) {

            $("#Panel2").hide();
            $("#problematicaCampo").removeAttr("disabled");
            $("#ProblematicaTexto").hide();

            //Objeto con los problemas
            $scope.Problemas = [
                  {
                      Problema: "",
                      EjeX: "",
                      EjeY: "",
                      Criterio: ""
                  }
            ];

            $scope.DatosProyecto = {
                IdProyecto: $rootScope.proyecto.datos.id,
                IdMatriz: "",
                ProblemaGeneral:"",
                DetalleMat: [
                  {
                      Problema: "",
                      EjeX: "",
                      EjeY: "",
                      Criterio: ""
                  }
                ]
            }

            $scope.SeriesPuntos = [];


            if ($rootScope.proyecto != undefined) {
                MatrizService.ConsultarMatriz($rootScope.proyecto.datos.id, function (response) {
                    if (response.success) {
                        $scope.DatosMatriz = response.matriz.DetalleMat;
                        $scope.DatosProyecto.ProblemaGeneral = response.matriz.ProblemaGeneral;
                      
                        $("#problemasMatriz").hide();
                        $("#Panel2").show();
                        //$("#problematicaCampo").attr("disabled", "disabled");
                        //$("#problematicaCampo").css("width", "115%");
                        $("#problematicaCampo").hide();
                        $("#ProblematicaTexto").show();
                        $("#BtnGuardar").hide();
                    } else {

                        $("#ModalOmitir").modal({ backdrop: 'static', keyboard: false });
                        $("#ModalOmitir").modal("show");

                    }
                })
            }
               
            $scope.OmitirMatriz = function ()
            {
                MatrizService.OmitirMatriz($rootScope.proyecto.datos.id, function (response) {
                    if (response.success) {
                        $location.url("/Menu")
                        $(".modal-backdrop").remove();
                    } 
                })
            }

            $scope.AgregarCampos = function () {

                if ($scope.Problemas.length < 25) {
                    $scope.Problemas.push({
                        Problema: "",

                    });
                } else {
                    alert("La cantidad de problemas a ingresar debe ser menor de 20");
                    return false;
                }

            };

            //Función para agregar la cantidad de problemas
            $scope.Agregar = function (Cantidad) {

                $scope.Problemas = [
                 {
                     Problema: "",
                     EjeX: "",
                     EjeY: "",
                     Criterio: ""
                 }
                ];
              

                var cantidad = parseInt(Cantidad);
                for (var i = 0; i < cantidad; i++) {
                    $scope.Problemas.push({
                        Problema: "",

                    });
                }
            }

            $scope.EliminarCampos = function (index) {

                if ($scope.Problemas.length > 1) {
                    $scope.Problemas.splice(index, 1);
                }

            };

            //Función para empezar a comparar los problemas
            $scope.mostrar = function () {

               
                $scope.ProblemasCalificar = [];

                //-------------DESCOMENTARIAR -------------------------
                if ($scope.Problemas.length < 5) {
                    alertify.success("La cantidad mínima de problemas es 5")
                    return;
                } else {

                    var contador = 0;
                    $.each($scope.Problemas, function (index, value1) {

                        if (value1.Problema == "") {
                            contador++;
                        }
                    });
                    if (contador != 0) {
                        alertify.success("Debe llenar todos los campos")
                        return;
                    }
                }

                $scope.totalProblemas = [];

                $.each($scope.Problemas, function (index, value1) {
                    if (index != 0) {
                        $scope.ProblemasCalificar.push({
                            Problema: value1.Problema
                        })
                    }
                    var problema = value1.Problema
                    $scope.totalProblemas.push({
                        problema
                    })
                });

                //Funcion para evitar que se duplique un problema antes de comparar
                var totalProblemas = [];
                $.each($scope.Problemas, function (i, item) {
                    if ($.inArray(item.Problema, totalProblemas) === -1) {
                        totalProblemas.push(item.Problema);
                    }
                });
               
              

                if (totalProblemas.length > 0 && totalProblemas.length < $scope.Problemas.length) {


                    swal({
                        text: 'Ups! Tienes problemas repetidos',
                        confirmButtonColor: '#238276',
                        width: '25%'

                    })
                
                    return false;
                }

                $scope.ProblemaComparante = $scope.Problemas[0].Problema;

                setTimeout(function () {
                    $("#comparar li:nth-child(1)").show();
                }, 100);
                $("#Problematicas").hide();
                $("#mostrar").hide();
                $("#agregarProblemas").hide();
                    $("#problemasMatriz").hide();
                    $("#influeniciaTitulo").css({ "display": "block" });
                    $("#problematicaCampo").removeAttr("disabled");

            }

            //Inicialización de variables para la matriz 
            var contador = 0;
            $scope.sumaEjeX = 0;
            $scope.Datos = [];
            $scope.sumaEjeY = [];
            $scope.Puntos = [];
            var suma = 0;

            //funcion para evaluar los problemas
            $scope.Calificar = function (index, valor, problematica) {

                suma = parseInt(suma) + parseInt(valor);


                $scope.sumaEjeY.push(parseInt(valor));

                //$scope.ProblemasCalificar.push($scope.ProblemasCalificar[index],valor);
                $scope.ProblemasCalificar.splice(index, 1);

                setTimeout(function () {
                    $("#comparar li:nth-child(" + (index + 1) + ")").show();
                }, 100);

                if ($scope.ProblemasCalificar.length == 0) {

                    $("#ModalConfirmar").modal({ backdrop: 'static', keyboard: false });
                    $("#ModalConfirmar").modal("show")

                }

            }

            //Funcion para comfirmar si desea repetir las calificaciones de la iteración.
            $scope.ConfirmarCalificacion = function (valor) {

                if (valor == 1) {

                    $scope.sumaEjeX = suma;

                } else {
                    $.each($scope.Problemas, function (index, value1) {
                        if (index != contador) {

                            $scope.ProblemasCalificar.push({
                                Problema: value1.Problema,

                            });

                        }
                    });
                    setTimeout(function () {
                        $("#comparar li:nth-child(1)").show();
                    }, 100);

                    return false;
                }

                suma = 0;
                $scope.sumaEjeY.splice(contador, 0, 0);
                $scope.Datos.push($scope.sumaEjeY);
             
                $scope.sumaEjeY = [];

                $scope.Problemas[contador].EjeX = $scope.sumaEjeX;
                $scope.sumaEjeX = 0;
                contador++;

                var prueba = contador + 1;
                if (prueba > $scope.Problemas.length) {
                    //alert("termino");
                 
                    //Fununción para sumar el eje Y del array con las calificaciones de cada problema
                    var sumY = (r, a) => r.map((b, i) => a[i] + b);

                    var sumaX = function (a, b) { return a + b; }

                    var calificacionesY = $scope.Datos.reduce(sumY);
                    $.each(calificacionesY, function (index1, value) {
                        $scope.Problemas[index1].EjeY = value;
                    });


                    //Objeto para que la grafica inicie desde el punto 0 de la grafica
                    var inicio = {
                        name: "Problemas",
                        color: 'rgba(0,0,0,0.0)',
                        data: [[0, 0]]
                    }
                   
                    $scope.SeriesPuntos.push(inicio);

                    $.each($scope.Problemas, function (index, value) {
                        var dato = {
                            name: value.Problema,
                            color: 'rgba(0,0,255,0.6)',
                            data: [[value.EjeX, value.EjeY]]
                        };
                        $scope.SeriesPuntos.push(dato);
                    });

                    $scope.EvaluacionCriterios();
                    $scope.grafica();
                   
                    console.log($scope.Problemas);

                    contador = 0;
                    return false;
                }


                $scope.ProblemaComparante = $scope.Problemas[contador].Problema;


                $.each($scope.Problemas, function (index, value1) {
                    if (index != contador) {

                        $scope.ProblemasCalificar.push({
                            Problema: value1.Problema,

                        });

                    }
                });
                setTimeout(function () {
                    $("#comparar li:nth-child(1)").show();
                }, 100);
            }

            //Función para pintar la grafica con los problemas calificados
            $scope.grafica = function () {

                $("#personaje").hide();
                $("#grafica").show();
                $("#problema").hide();
                $("#influeniciaTitulo").hide();


                Highcharts.chart('container', {
                    chart: {
                        type: 'scatter',
                        height: 480
                        //zoomType: 'xy'
                    },
                    title: {
                        text: 'GRAFICA VESTER'
                    },
                    //subtitle: {
                    //    text: 'Source: Heinz  2003'
                    //},
                    xAxis: {
                        title: {
                            enabled: true,
                            text: 'EJE X'
                        },
                        startOnTick: false,
                        endOnTick: false,
                        showLastLabel: true,
                        allowDecimals: false
                    },
                    yAxis: {
                        title: {
                            text: 'EJE Y'
                        },

                        startOnTick: false,
                        endOnTick: true,
                        showLastLabel: true,
                        allowDecimals: false,
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        scatter: {
                            marker: {
                                radius: 5,
                                states: {
                                    hover: {
                                        enabled: true,
                                        lineColor: 'rgb(100,100,100)'
                                    }
                                }
                            },
                            states: {
                                hover: {
                                    marker: {
                                        enabled: false
                                    }
                                }
                            },
                            tooltip: {
                                headerFormat: '<b>{series.name}</b><br>',
                                pointFormat: '{point.x} X, {point.y} Y'
                            }
                        }
                    },
                    series: $scope.SeriesPuntos
                });

                console.log($scope.SeriesPuntos);
                var tamañoMaxX = (($(".highcharts-root").width()) / 2) + 27;
                var tamañoMaxY = $(".highcharts-root").height();
                var animacion = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;;

                //Función para repetir el calcula de la linea vertical 
                function repetir() {
                    $(".highcharts-yaxis-grid path:first-child").attr("d", "M " + tamañoMaxX + " 52 L " + tamañoMaxX + " " + (tamañoMaxY - 60) + "").attr("stroke", "blue").attr("stroke-width", "2");
                    animacion(repetir);
                }

                animacion(repetir);

                $("#container").prepend('<span id="lineaTerror"></span>');

                $("#lineaTerror").css({
                    "width": $(".highcharts-root").width() - 71 + "px",
                    "height": "2px",
                    "top": (((tamañoMaxY / 2) - 8) + "px"),
                    "left": "110px",
                    "background": "blue",
                    "z-index": "1",
                    "position": "absolute"
                    //"margin-left": "17%"
                });

                $(".highcharts-button , .highcharts-credits").hide();


            }

            //Función para evaluar los criterios de cada problema
            $scope.EvaluacionCriterios = function () {

                var totalCalificacion = (parseInt($scope.Problemas.length) * 3) - 3;
                //var puntoMedioX = (totalCalificacion / 2);
                var puntoMedioX = 0;
                var puntoAltoY = 0;
                var puntoAltoX = 0;
                var puntoMedioY = 0;

                $.each($scope.Problemas, function (index, value) {

                    if (value.EjeY >= puntoAltoY) {

                        puntoAltoY = value.EjeY;
                        puntoMedioY = (parseInt(puntoAltoY) + 1) / 2;
                    }
                    if (value.EjeX >= puntoAltoX) {

                        puntoAltoX = value.EjeX;
                        puntoMedioX = (parseInt(puntoAltoX) / 2);
                    }
                });

                console.log(puntoMedioY);
                console.log(puntoMedioX);

                $scope.PuntosCriticos = [];

                $.each($scope.Problemas, function (index, value) {

                    if (value.EjeX <= puntoMedioX && value.EjeY >= puntoMedioY) {

                        $scope.Problemas[index].Criterio = "Pasivos";

                    } else if (value.EjeX > puntoMedioX && value.EjeY > puntoMedioY) {

                        $scope.Problemas[index].Criterio = "Criticos";

                        $scope.PuntosCriticos.push($scope.Problemas[index]);


                    } else if (value.EjeX < puntoMedioX && value.EjeY < puntoMedioY) {

                        $scope.Problemas[index].Criterio = "Indiferentes";

                    } else if (value.EjeX >= puntoMedioX && value.EjeY <= puntoMedioY) {

                        $scope.Problemas[index].Criterio = "Activos";

                    }
                });

                var contador = 0;
                var valorPuntoCritico = 0

                if ($scope.PuntosCriticos.length > 0 ) {
                    $.each($scope.PuntosCriticos, function (index, value) {
                        var valor = parseInt(value.EjeX) + parseInt(value.EjeY);
                        valorPuntoCritico = Math.sqrt(valor);

                        if (valorPuntoCritico > contador) {

                            contador = valorPuntoCritico;
                            $scope.puntoAlto = (index);
                        }
                    });

                    $.each($scope.SeriesPuntos, function (index, value) {

                        if (value.name == $scope.PuntosCriticos[$scope.puntoAlto].Problema) {
                            var inicio = {
                                name: "Punto Critico: " + $scope.PuntosCriticos[$scope.puntoAlto].Problema,
                                color: 'rgba(255,0,0,1)',
                                data: [[$scope.PuntosCriticos[$scope.puntoAlto].EjeX, $scope.PuntosCriticos[$scope.puntoAlto].EjeY]]
                            }
                            $scope.SeriesPuntos[index] = inicio;
                        }
                    })

                    $.each($scope.Problemas, function (index, value) {

                        if (value.Problema == $scope.PuntosCriticos[$scope.puntoAlto].Problema) {

                            $scope.Problemas[index].Criterio = "Punto Critico";
                        } if (value.Criterio == "Criticos" && value.Problema != $scope.PuntosCriticos[$scope.puntoAlto].Problema) {
                            $scope.Problemas[index].Criterio = "Activos";
                        }
                    });

                } else {
                    var contador = 0;
                    $.each($scope.SeriesPuntos, function (index, value) {
                        if (contador == 0) {
                            var inicio = {
                                name: "Punto Critico: " + $scope.Problemas[0].Problema,
                                color: 'rgba(255,0,0,1)',
                                data: [[$scope.Problemas[0].EjeX, $scope.Problemas[0].EjeY]]
                            }
                            $scope.SeriesPuntos[index] = inicio;
                            contador++;
                        }

                    });
                }
               


            
                //$scope.grafica();
                //console.log($scope.Problemas);

            }

            //Función para habilitar el botón de califcar 
            $scope.HabilitarEnviar = function () {

                $("#Calificar").attr("disabled", false);
            }

            //Función para almacenar los datos de la matriz  
            $scope.Guardar = function () {
                $scope.DatosProyecto.DetalleMat = $scope.Problemas;
                if ($scope.DatosProyecto.ProblemaGeneral == "" ) {



                    swal({
                        text: 'Ingrese el problema general',
                        confirmButtonColor: '#238276',
                        width: '25%'

                    })
                  
                    return;

                } else if ($scope.DatosProyecto.DetalleMat[0].Criterio == "") {
                    swal({
                        text: 'Debe realizar la matriz de Vester',
                        confirmButtonColor: '#238276',
                        width: '25%'

                    })
                  
                    return;
                }
           
                MatrizService.Guardar($scope.DatosProyecto, function (response) {
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

            $scope.Regresar = function () {

                $location.url("/Menu");
                $(".notify").hide();

            }



        }]);