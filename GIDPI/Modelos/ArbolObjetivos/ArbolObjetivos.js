ManualApp.controller('ArbolObjetivosController',
    ['$scope', '$rootScope', '$location', 'ArbolObjetivoService', '$cookies', '$cookieStore', 'MenuService', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, ArbolObjetivoService, $cookies, $cookieStore, MenuService, $routeParams, $sce) {
            $("#resultados").attr("disabled", "disabled");
            //LINEA PARA OCULTAR EL FORMULARIO DE OBJETIVOS
            $("#VistaObjetivos").hide();
           
            $("#vistaResultados").hide();
            //OBJETOS
            $scope.Arbol = {
                IdProyecto: $rootScope.proyecto.datos.id,
                IdMatriz: "",
                ProblemaGeneral: "",
                DetalleMat: [
                  {
                      Problema: "",
                      EjeX: "",
                      EjeY: "",
                      Criterio: ""
                  }
                ]
            }

            $scope.ObjArbol = {
                IdProyecto: $rootScope.proyecto.datos.id,
                ObjetivoCentral: "",
                Medios: [
                  {
                      Medio: "",
                      MediosIndirectos: [
                          {
                              indirecta: ""
                          }
                      ]
                  }
                ],
                Fines: [
                 {
                     fin: "",
                     FinesIndirectos: [
                         {
                             indirecto: ""
                         }
                     ]
                 }
                ]

            }

            $scope.Objetivos = {
                IdProyecto: $rootScope.proyecto.datos.id,
                ObjetivoCentral: "",
                Medios: [
                  {
                      Medio: "",
                      MediosIndirectos: [
                          {
                              indirecta: ""
                          }
                      ]
                  }
                ],
                Fines: [
                 {
                     fin: "",
                     FinesIndirectos: [
                         {
                             indirecto: ""
                         }
                     ]
                 }
                ]

            }

            $scope.DatosProyecto = {
                id: "",
                Tema: "",
                IdUsuario: "",
                Etapa: ""
            }

            $scope.ObjetivosFinales = {
                IdProyecto: $rootScope.proyecto.datos.id,
                ObjetivoCentral: "",
                Objetivos: {
                    IdObjetivoGeneral: "",
                    ObjetivoEsp: "",
                    Resultado1: "",
                    MedidaResultado: "",
                    HerramientaResultado: "",
                    ProductoResultado: ""
                }

            }



            //-----------------------------------------------------------------------------------------------------

            //VARIABLE PARA ACTIVAR CICLO INFINITO
            var update = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                         window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
            var panel = document.querySelector("#panel");
            var textoPanel = document.querySelector("#mostrarPanel h6");
            var alerta = document.querySelector("#alerta");
            var panelOn = true, numEfectos, numeCausas, tipo, txtIndirecto, efecto, causa, indirecto, elementoBorrar, img3, idElementoBorrar, causaImg3, imgBorrar;
            var efectoImg3;



            //CAPTURAR UL
            efecto = document.querySelector("#efecto");
            causa = document.querySelector("#causa");
            efectoIndirectoUl = document.querySelector("#efectoIndirecto");
            causaIndirectaUl = document.querySelector("#causaIndirecta");

            //CICLO INFINITO
            function repetir() {

                //CAPTURAR LA CANTIDAD DE LI
                efectos = document.querySelectorAll("#efecto li");
                causas = document.querySelectorAll("#causa li");
                efectosIndirectos = document.querySelectorAll("#efectoIndirecto li");
                causasIndirectas = document.querySelectorAll("#causaIndirecta li")

                //CAPTURAR IMAGENES 3
                efectoImg3 = document.querySelectorAll("#imgEfecto3 img");
                causaImg3 = document.querySelectorAll("#imgCausa3 img");

                //ANCHO IMAGENES 3
                //efectos indirectos
                if (efectosIndirectos.length == 1) {
                    efectoImg3[0].style.width = 50 + "%";
                } else {
                    for (var i = 0; i < efectoImg3.length; i++) {
                        efectoImg3[i].style.width = 100 / efectos.length + "%";
                    }
                }

                //causas indirectas
                if (causasIndirectas.length == 1) {
                    causaImg3[0].style.width = 50 + "%";
                } else {
                    for (var i = 0; i < causaImg3.length; i++) {
                        causaImg3[i].style.width = 100 / causas.length + "%";
                    }
                }

                //ANCHO DE LI
                //efectos
                for (var i = 0; i < efectos.length; i++) {
                    efectos[i].style.width = 100 / efectos.length + "%";
                }
                //causas
                for (var i = 0; i < causas.length; i++) {
                    causas[i].style.width = 100 / causas.length + "%";
                }
                //efectos indirectos
                if (efectosIndirectos.length == 1) {
                    efectosIndirectos[0].style.width = 50 + "%";
                } else {
                    for (var i = 0; i < efectosIndirectos.length; i++) {
                        efectosIndirectos[i].style.width = 100 / efectos.length + "%";
                    }
                }

                //causas indirectas
                if (causasIndirectas.length == 1) {
                    causasIndirectas[0].style.width = 50 + "%";
                } else {
                    for (var i = 0; i < causasIndirectas.length; i++) {
                        causasIndirectas[i].style.width = 100 / causas.length + "%";
                    }
                }


                //ASIGNAR IMAGENES
                //efectos
                if (efectos.length != 0) {
                    document.querySelector("#imgEfecto").setAttribute("src", "img/lineaU" + efectos.length + ".png");
                } else {

                    document.querySelector("#imgEfecto").setAttribute("src", "img/sinLinea.png");
                }
                //causas
                if (causas.length != 0) {
                    document.querySelector("#imgCausa").setAttribute("src", "img/lineaD" + causas.length + ".png");
                } else {
                    document.querySelector("#imgCausa").setAttribute("src", "img/sinLinea.png");
                }

                //efectos indirectos
                var imgEfectoIndirecto = document.querySelectorAll("#imgEfecto3 img");

                if (imgEfectoIndirecto.length != 0) {
                    for (var i = 0; i < imgEfectoIndirecto.length; i++) {
                        var total = document.querySelectorAll("#efectoIndirecto li:nth-child(" + (i + 1) + ") div");
                        if (total.length != 0) {
                            imgEfectoIndirecto[i].setAttribute("src", "img/lineaU" + total.length + ".png");
                        } else {
                            imgEfectoIndirecto[i].setAttribute("src", "img/sinLinea.png");
                        }
                    }
                }

                //causas indirectas
                var imgCausaIndirecta = document.querySelectorAll("#imgCausa3 img");

                if (imgCausaIndirecta.length != 0) {
                    for (var i = 0; i < imgCausaIndirecta.length; i++) {
                        var total = document.querySelectorAll("#causaIndirecta li:nth-child(" + (i + 1) + ") div");
                        if (total.length != 0) {
                            imgCausaIndirecta[i].setAttribute("src", "img/lineaD" + total.length + ".png");
                        } else {
                            imgCausaIndirecta[i].setAttribute("src", "img/sinLinea.png");
                        }
                    }
                }


                //ASIGANR ID´S Y NUMERO DE POSICION
                for (var i = 0; i < efectos.length; i++) {
                    efectos[i].setAttribute("id", "efecto" + (i + 1));
                    efectos[i].querySelector(".bloque div span").innerHTML = (i + 1) + ".";
                    efectoImg3[i].setAttribute("id", "efecto" + (i + 1) + "img");
                    efectosIndirectos[i].setAttribute("id", "efecto" + (i + 1) + "indirecto");
                }
                for (var i = 0; i < causas.length; i++) {
                    causas[i].setAttribute("id", "causa" + (i + 1));
                    causas[i].querySelector(".bloque div span").innerHTML = (i + 1) + ".";
                    causaImg3[i].setAttribute("id", "causa" + (i + 1) + "img");
                    causasIndirectas[i].setAttribute("id", "causa" + (i + 1) + "indirecto");

                }

                update(repetir); //entra en la funcion repetir sin salir de la misma, asi crea un ciclo infinito
            }
            update(repetir); //inicia la funcion repetir


            // FUNCIONES QUE ACTIVAN LAS VENTANAS MODALES
            // mostrar
            function modalOn(elemento) {
                //$("#modal").show();
                //$("#arbolContenedor").hide();
                document.querySelector("#modal").style.display = "block";
                document.querySelector(elemento).style.display = "block";
            }
            // ocultar
            function modalOff() {
                document.querySelector("#modal").style.display = "none";
                //$("#arbolContenedor").show();
                var elementosModal = document.querySelectorAll(".contenidoModal");
                for (var i = 0; i < elementosModal.length; i++) {
                    elementosModal[i].style.display = "none";
                }
            }

            //FUNCION DE LAS ALERTAS
            //alerta1 que dura cierto tiempo, tiene 3 parametros (la duracion es en segundos).
            function alerta1(titulo, texto, duracion) {
                alerta.style.top = "5%";
                alerta.querySelector("h3").innerHTML = titulo;
                alerta.querySelector("p").innerHTML = texto;
                setTimeout(function () {
                    alerta.style.top = "-25%";
                }, duracion * 1000)
            }


            //VARIABLES PARA LA CREACIÓN DEL ARBOL
            var contEfeIndir = 0;
            var contCuaIndir = 0;
            $scope.CausasTotales = [];
            $scope.EfectosTotales = [];
            $scope.MediosIndTotales = [];
            $scope.FinesIndTotales = [];

            $scope.CausasIndTotales = [];
            $scope.EfectosIndTotales = [];


            //VARIABLE Y FUNCIÓN PARA CONSULTAR EL PROYECTO ACTUALIZADO Y CREAR EL ARBOL DE PROBLEMAS
            $scope.IdProyecto = $rootScope.proyecto.datos.id;
            MenuService.AbrirProyecto($scope.IdProyecto, function (response) {
                if (response.success) {
                    $scope.DatosProyecto = response.proyecto;
                    $rootScope.proyecto.datos.Etapa = $scope.DatosProyecto.Etapa;
                    //FUNCIÓN PARA CONSULTAR LOS DATOS DE LA MATRIZ  Y PINTAR EL ARBOL DE PROBLEMAS
                    if ($rootScope.proyecto != undefined) {
                        if ($scope.DatosProyecto.Etapa < 4) {
                            ArbolObjetivoService.ConsultarArbolFinal($rootScope.proyecto.datos.id, function (response) {
                                if (response.success) {

                                    var problemaGeneral = response.ArbolFinal.ProblemaCentral;
                                    document.querySelector("#txtProblema").value = problemaGeneral;
                                    alerta1("Consejo.", "En el panel de la izquierda podras crear las causas y efectos.", 5);

                                    //CICLO PARA CREAR LOS EFECTOS EN EL ARBOL
                                    $.each(response.ArbolFinal.Efectos, function (index, value) {

                                        img3 = document.createElement("img");
                                        elemento = document.createElement("li");
                                        elemento2 = document.createElement("li");
                                        bloque = document.createElement("div");
                                        borrar = document.createElement("div");
                                        txtArea = document.createElement("textarea");
                                        txtArea.value = value.Efecto;
                                        borrar.innerHTML = "<span></span><h6 class='borrarElemento' onclick='borrarElemento(this)'> Borrar</h6>";
                                        bloque.setAttribute("class", "bloque");
                                        txtArea.setAttribute("class", "txtBloque2");
                                        txtArea.setAttribute("maxlength", "140");
                                        efecto.appendChild(elemento).appendChild(bloque).appendChild(borrar);
                                        efecto.querySelector("li:last-child div:last-child").appendChild(txtArea);
                                        document.querySelector("#imgEfecto3").appendChild(img3);
                                        document.querySelector("#efectoIndirecto").appendChild(elemento2);


                                        $.each(value.EfectoIndirecta, function (index1, value1) {
                                            $scope.EfectosIndTotales.push({ id: index, EfectoIndirecta: value.EfectoIndirecta[index1] })
                                        })


                                    });

                                    //CICLO PARA CREAR EFECTOS INDIRECTOS DEL ARBOL

                                    var indirecto1 = 0;
                                    $.each($scope.EfectosIndTotales, function (index, value) {

                                        indirecto1 = (value.id) + 1;

                                        bloque = document.createElement("div");
                                        borrar = document.createElement("span");
                                        txtArea = document.createElement("textarea");
                                        txtArea.value = value.EfectoIndirecta;
                                        borrar.innerHTML = "<h6 class='borrarElemento' onclick='borrarElemento2(this)'> Borrar</h6>";
                                        bloque.setAttribute("class", "bloque2");
                                        txtArea.setAttribute("class", "txtBloque3");
                                        txtArea.setAttribute("maxlength", "140");
                                        efectoIndirectoUl.querySelector("li:nth-child(" + indirecto1 + ")").appendChild(bloque).appendChild(txtArea);
                                        efectoIndirectoUl.querySelector("li:nth-child(" + indirecto1 + ") div:last-child").appendChild(borrar);
                                    })

                                    //CICLO PARA CREAR LOS CAUSAS EN EL ARBOL
                                    $.each(response.ArbolFinal.Causas, function (index, value) {

                                        img3 = document.createElement("img");
                                        elemento = document.createElement("li");
                                        elemento2 = document.createElement("li");
                                        bloque = document.createElement("div");
                                        borrar = document.createElement("div");
                                        txtArea = document.createElement("textarea");
                                        txtArea.value = value.Causa;
                                        borrar.innerHTML = "<span></span><h6 class='borrarElemento' onclick='borrarElemento(this)'> Borrar</h6>";
                                        bloque.setAttribute("class", "bloque");
                                        txtArea.setAttribute("class", "txtBloque2");
                                        txtArea.setAttribute("maxlength", "140");
                                        causa.appendChild(elemento).appendChild(bloque).appendChild(borrar);
                                        causa.querySelector("li:last-child div:last-child").appendChild(txtArea);
                                        document.querySelector("#imgCausa3").appendChild(img3);
                                        document.querySelector("#causaIndirecta").appendChild(elemento2);

                                        $.each(value.CausaIndirecta, function (index1, value1) {
                                            $scope.CausasIndTotales.push({ id: index, CausaIndirecta: value.CausaIndirecta[index1] })
                                        })
                                    });

                                    //console.log($scope.CausasIndTotales);
                                    //CICLO PARA CREAR CAUSAS INDIRECTAS DEL ARBOL
                                    var indirecto = 0;
                                    $.each($scope.CausasIndTotales, function (index, value) {
                                        indirecto = (value.id) + 1;

                                        bloque = document.createElement("div");
                                        borrar = document.createElement("span");
                                        txtArea = document.createElement("textarea");
                                        txtArea.value = value.CausaIndirecta;
                                        borrar.innerHTML = "<h6 class='borrarElemento' onclick='borrarElemento2(this)'> Borrar</h6>";
                                        bloque.setAttribute("class", "bloque2");
                                        txtArea.setAttribute("class", "txtBloque3");
                                        txtArea.setAttribute("maxlength", "140");
                                        causaIndirectaUl.querySelector("li:nth-child(" + indirecto + ")").appendChild(bloque).appendChild(txtArea);
                                        causaIndirectaUl.querySelector("li:nth-child(" + indirecto + ") div:last-child").appendChild(borrar);

                                    })
                                }

                                $("#TabObjetivos").attr("disabled", "disabled");
                            })

                        } else {
                            ArbolObjetivoService.ConsultarArbolObjetivosFinal($rootScope.proyecto.datos.id, function (response) {
                                if (response.success) {

                                    var ObjetivoCentral = response.ArbolFinal.ObjetivoCentral;
                                    document.querySelector("#txtProblema").value = ObjetivoCentral;
                                    alerta1("Consejo.", "En el panel de la izquierda podras crear las causas y efectos.", 5);

                                    //CICLO PARA CREAR LOS EFECTOS EN EL ARBOL
                                    $.each(response.ArbolFinal.Fines, function (index, value) {

                                        img3 = document.createElement("img");
                                        elemento = document.createElement("li");
                                        elemento2 = document.createElement("li");
                                        bloque = document.createElement("div");
                                        borrar = document.createElement("div");
                                        txtArea = document.createElement("textarea");
                                        txtArea.value = value.fin;
                                        borrar.innerHTML = "<span></span><h6 class='borrarElemento' onclick='borrarElemento(this)'> Borrar</h6>";
                                        bloque.setAttribute("class", "bloque");
                                        txtArea.setAttribute("class", "txtBloque2");
                                        txtArea.setAttribute("maxlength", "140");
                                        efecto.appendChild(elemento).appendChild(bloque).appendChild(borrar);
                                        efecto.querySelector("li:last-child div:last-child").appendChild(txtArea);
                                        document.querySelector("#imgEfecto3").appendChild(img3);
                                        document.querySelector("#efectoIndirecto").appendChild(elemento2);


                                        $.each(value.FinesIndirectos, function (index1, value1) {
                                            $scope.FinesIndTotales.push({ id: index, FinesIndirectos: value.FinesIndirectos[index1] })
                                        })


                                    });

                                    //CICLO PARA CREAR EFECTOS INDIRECTOS DEL ARBOL
                                    //console.log($scope.FinesIndTotales);
                                    var indirecto1 = 0;
                                    $.each($scope.FinesIndTotales, function (index, value) {

                                        indirecto1 = (value.id) + 1;

                                        bloque = document.createElement("div");
                                        borrar = document.createElement("span");
                                        txtArea = document.createElement("textarea");
                                        txtArea.value = value.FinesIndirectos;
                                        borrar.innerHTML = "<h6 class='borrarElemento' onclick='borrarElemento2(this)'> Borrar</h6>";
                                        bloque.setAttribute("class", "bloque2");
                                        txtArea.setAttribute("class", "txtBloque3");
                                        txtArea.setAttribute("maxlength", "140");
                                        efectoIndirectoUl.querySelector("li:nth-child(" + indirecto1 + ")").appendChild(bloque).appendChild(txtArea);
                                        efectoIndirectoUl.querySelector("li:nth-child(" + indirecto1 + ") div:last-child").appendChild(borrar);
                                    })

                                    //CICLO PARA CREAR LOS CAUSAS EN EL ARBOL
                                    $.each(response.ArbolFinal.Medios, function (index, value) {

                                        img3 = document.createElement("img");
                                        elemento = document.createElement("li");
                                        elemento2 = document.createElement("li");
                                        bloque = document.createElement("div");
                                        borrar = document.createElement("div");
                                        txtArea = document.createElement("textarea");
                                        txtArea.value = value.Medio;
                                        borrar.innerHTML = "<span></span><h6 class='borrarElemento' onclick='borrarElemento(this)'> Borrar</h6>";
                                        bloque.setAttribute("class", "bloque");
                                        txtArea.setAttribute("class", "txtBloque2");
                                        txtArea.setAttribute("maxlength", "140");
                                        causa.appendChild(elemento).appendChild(bloque).appendChild(borrar);
                                        causa.querySelector("li:last-child div:last-child").appendChild(txtArea);
                                        document.querySelector("#imgCausa3").appendChild(img3);
                                        document.querySelector("#causaIndirecta").appendChild(elemento2);

                                        $.each(value.MediosIndirectos, function (index1, value1) {
                                            $scope.MediosIndTotales.push({ id: index, MediosIndirectos: value.MediosIndirectos[index1] })
                                        })
                                    });

                                    //console.log($scope.MediosIndTotales);
                                    //CICLO PARA CREAR CAUSAS INDIRECTAS DEL ARBOL
                                    var indirecto = 0;
                                    $.each($scope.MediosIndTotales, function (index, value) {
                                        indirecto = (value.id) + 1;

                                        bloque = document.createElement("div");
                                        borrar = document.createElement("span");
                                        txtArea = document.createElement("textarea");
                                        txtArea.value = value.MediosIndirectos;
                                        borrar.innerHTML = "<h6 class='borrarElemento' onclick='borrarElemento2(this)'> Borrar</h6>";
                                        bloque.setAttribute("class", "bloque2");
                                        txtArea.setAttribute("class", "txtBloque3");
                                        txtArea.setAttribute("maxlength", "140");
                                        causaIndirectaUl.querySelector("li:nth-child(" + indirecto + ")").appendChild(bloque).appendChild(txtArea);
                                        causaIndirectaUl.querySelector("li:nth-child(" + indirecto + ") div:last-child").appendChild(borrar);

                                    })
                                }
                                $("#guardar").hide();

                                $("#botonSiguienteArbol").show();

                            })
                        }
                    }

                }

            })


            console.log($rootScope.proyecto.datos);

            //FUNCION PARA MOSTRAR Y OCULTAR EL PANEL
            $scope.mostrarPanel = function () {
                if (panelOn) {
                    panel.style.top = "-100%";
                    textoPanel.innerHTML = "Mostrar";
                    panelOn = false;
                } else {
                    panel.style.top = "30px";
                    textoPanel.innerHTML = "Ocultar";
                    panelOn = true;
                }
            }

            //FUNCION DEL SELECT DEL PANEL
            $scope.cambioElemento = function () {
                tipo = document.querySelector("#elemento").value;
                document.querySelector("#asignarIndirecta").innerHTML = '<option value="vacio">Seleccionar...</option>'; //resetea el select de indirecta

                if (tipo == "efectoIndirecto") {
                    document.querySelector("#indirecta").style.display = "block"; //muestra el select para asignar a una indirecta
                    document.querySelector("#txtIndirecta").innerHTML = "efecto"; //coloca el texto segun la indirecta (causas o efectos)
                    for (var i = 0; i < efectos.length; i++) {
                        var option = document.createElement("option");
                        option.innerHTML = i + 1;
                        option.setAttribute("value", i + 1);
                        document.querySelector("#asignarIndirecta").appendChild(option);
                        alerta1("Consejo.", "Asiga tu efecto indirecto a un efecto según su posición.", 3);
                    }
                } else if (tipo == "causaIndirecta") {
                    document.querySelector("#indirecta").style.display = "block"; //muestra el select para asignar a una indirecta
                    document.querySelector("#txtIndirecta").innerHTML = "causa"; //coloca el texto segun la indirecta (causas o efectos)
                    for (var i = 0; i < causas.length; i++) {
                        var option = document.createElement("option");
                        option.innerHTML = i + 1;
                        option.setAttribute("value", i + 1);
                        document.querySelector("#asignarIndirecta").appendChild(option);
                        alerta1("Consejo.", "Asiga tu causa indirecta a una causa según su posición.", 3);
                    }
                } else {
                    document.querySelector("#indirecta").style.display = "none"; //esconde el select para asignar a una indirecta
                }
            }

            //BOTON CREAR DEL PANEL
            $scope.crear = function () {
                indirecto = document.querySelector("#asignarIndirecta").value;
                var elemento, txtArea, elemento2;

                if (tipo === "vacio" || tipo === undefined) { //validar si el select de tipo viene vacio
                    alerta1("Recuerda.", "Debes seleccionar un efecto o una causa.", 3);
                }

                if (indirecto == "vacio" && tipo == "efectoIndirecto" || tipo == "causaIndirecta") {
                    alerta1("Recuerda.", "Debes seleccionar un efecto o una causa primero.", 3);
                }

                //crear efectos
                if (tipo == "efecto" && efectos.length < 5) {
                    img3 = document.createElement("img");
                    elemento = document.createElement("li");
                    elemento2 = document.createElement("li");
                    bloque = document.createElement("div");
                    borrar = document.createElement("div");
                    txtArea = document.createElement("textarea");
                    txtArea.value = "";
                    borrar.innerHTML = "<span></span><h6 class='borrarElemento' onclick='borrarElemento(this)'> Borrar</h6>";
                    bloque.setAttribute("class", "bloque");
                    txtArea.setAttribute("class", "txtBloque2");
                    txtArea.setAttribute("maxlength", "140");
                    efecto.appendChild(elemento).appendChild(bloque).appendChild(borrar);
                    efecto.querySelector("li:last-child div:last-child").appendChild(txtArea);
                    document.querySelector("#imgEfecto3").appendChild(img3);
                    document.querySelector("#efectoIndirecto").appendChild(elemento2);
                } else if (tipo == "efecto" && efectos.length >= 5) {
                    alerta1("Recuerda.", "Ya tienes 5 efectos.", 2);
                }

                // crear causas
                if (tipo == "causa" && causas.length < 5) {
                    img3 = document.createElement("img");
                    elemento = document.createElement("li");
                    elemento2 = document.createElement("li");
                    bloque = document.createElement("div");
                    borrar = document.createElement("div");
                    txtArea = document.createElement("textarea");
                    borrar.innerHTML = "<span></span><h6 class='borrarElemento' onclick='borrarElemento(this)'> Borrar</h6>";
                    bloque.setAttribute("class", "bloque");
                    txtArea.setAttribute("class", "txtBloque2");
                    txtArea.setAttribute("maxlength", "140");
                    causa.appendChild(elemento).appendChild(bloque).appendChild(borrar);
                    causa.querySelector("li:last-child div:last-child").appendChild(txtArea);
                    document.querySelector("#imgCausa3").appendChild(img3);
                    document.querySelector("#causaIndirecta").appendChild(elemento2);
                } else if (tipo == "causa" && causas.length >= 5) {
                    alerta1("Recuerda.", "Ya tienes 5 causas.", 2);
                }

                if (indirecto != "vacio") {
                    // crear efecto indirecto
                    if (tipo == "efectoIndirecto" && document.querySelectorAll("#efectoIndirecto li:nth-child(" + indirecto + ") div").length < 3) {
                        bloque = document.createElement("div");
                        borrar = document.createElement("span");
                        txtArea = document.createElement("textarea");
                        borrar.innerHTML = "<h6 class='borrarElemento' onclick='borrarElemento2(this)'> Borrar</h6>";
                        bloque.setAttribute("class", "bloque2");
                        txtArea.setAttribute("class", "txtBloque3");
                        txtArea.setAttribute("maxlength", "140");
                        efectoIndirectoUl.querySelector("li:nth-child(" + indirecto + ")").appendChild(bloque).appendChild(txtArea);
                        efectoIndirectoUl.querySelector("li:nth-child(" + indirecto + ") div:last-child").appendChild(borrar);

                    } else if (document.querySelectorAll("#efectoIndirecto li:nth-child(" + indirecto + ") div").length >= 3) {
                        alerta1("Recuerda.", "Ya tienes 3 efectos indirectos.", 2);
                    }

                    // crear causa indirecta
                    if (tipo == "causaIndirecta" && document.querySelectorAll("#causaIndirecta li:nth-child(" + indirecto + ") div").length < 3) {
                        console.log(indirecto);
                        bloque = document.createElement("div");
                        borrar = document.createElement("span");
                        txtArea = document.createElement("textarea");
                        borrar.innerHTML = "<h6 class='borrarElemento' onclick='borrarElemento2(this)'> Borrar</h6>";
                        bloque.setAttribute("class", "bloque2");
                        txtArea.setAttribute("class", "txtBloque3");
                        txtArea.setAttribute("maxlength", "140");
                        causaIndirectaUl.querySelector("li:nth-child(" + indirecto + ")").appendChild(bloque).appendChild(txtArea);
                        causaIndirectaUl.querySelector("li:nth-child(" + indirecto + ") div:last-child").appendChild(borrar);
                    } else if (document.querySelectorAll("#causaIndirecta li:nth-child(" + indirecto + ") div").length >= 3) {
                        alerta1("Recuerda.", "Ya tienes 3 causas indirectas.", 2);
                    }
                }
            }

            //FUNCIÓN PARA GUARDAR LOS DATOS DEL ARBOL
            document.querySelector("#guardar").addEventListener("click", function () {

                var datosProblema = document.querySelector("#txtProblema").value;
                var datosEfectos = [];//ESTE ARREGLO REPRESENTA LOS FINES
                var datosCausas = [];//ESTE ARREGLO REPRESENTA LOS MEDIOS
                var datosEfectosIndirectos = [];//ESTE ARREGLO REPRESENTA LOS FINES INDIRECTOS
                var datosCausasIndirectos = [];//ESTE ARREGLO REPRESENTA LOS MEDIOS INDIRECTOS

                for (var i = 0; i < efectos.length; i++) {
                    var FinesVacios = document.querySelector("#efecto li:nth-child(" + (i + 1) + ") textarea").value;
                    if (FinesVacios != "") {
                        datosEfectos[i] = document.querySelector("#efecto li:nth-child(" + (i + 1) + ") textarea").value;
                    } else {
                        alertify.success("Ups! tienes algún fin vacio");
                        return;
                    }
                }


                for (var i = 0; i < causas.length; i++) {
                    var MediosVacios = datosCausas[i] = document.querySelector("#causa li:nth-child(" + (i + 1) + ") textarea").value
                    if (MediosVacios != "") {
                        datosCausas[i] = document.querySelector("#causa li:nth-child(" + (i + 1) + ") textarea").value;
                    } else {
                        alertify.success("Ups! tienes algún medio vacio");
                        return;
                    }
                }

                for (var i = 0; i < efectos.length; i++) {
                    var cadaLiIndirecto = [];

                    for (var e = 0; e < document.querySelectorAll("#efecto" + (i + 1) + "indirecto div").length; e++) {
                        var FinIndirectoVacios = cadaLiIndirecto[e] = document.querySelector("#efecto" + (i + 1) + "indirecto div:nth-child(" + (e + 1) + ") textarea").value;

                        if (FinIndirectoVacios != "") {
                            cadaLiIndirecto[e] = document.querySelector("#efecto" + (i + 1) + "indirecto div:nth-child(" + (e + 1) + ") textarea").value;
                        } else {
                            alertify.success("Ups! tienes algún fin indirecto vacio");
                            return;
                        }

                    }
                    datosEfectosIndirectos.push(cadaLiIndirecto);
                }

                for (var i = 0; i < causas.length; i++) {
                    var cadaLiIndirecto = [];

                    for (var e = 0; e < document.querySelectorAll("#causa" + (i + 1) + "indirecto div").length; e++) {
                        var MedioIndirectosVacios = cadaLiIndirecto[e] = document.querySelector("#causa" + (i + 1) + "indirecto div:nth-child(" + (e + 1) + ") textarea").value;
                        if (MedioIndirectosVacios != "") {
                            cadaLiIndirecto[e] = document.querySelector("#causa" + (i + 1) + "indirecto div:nth-child(" + (e + 1) + ") textarea").value;
                        } else {
                            alertify.success("Ups! tienes algún medio indirecto vacia");
                            return;
                        }

                    }
                    datosCausasIndirectos.push(cadaLiIndirecto);
                }
                //console.log(datosEfectosIndirectos);
                //console.log(datosCausasIndirectos);
                //console.log(datosEfectos);
                //console.log(datosCausas);

                $scope.ObjArbol.ObjetivoCentral = datosProblema;
                $.each(datosCausas, function (index, value) {
                    if (value != "") {
                        $scope.ObjArbol.Medios.push({ Medio: value, MediosIndirectos: datosCausasIndirectos[index] })
                    }


                })
                $.each(datosEfectos, function (index, value) {

                    $scope.ObjArbol.Fines.push({ fin: value, FinesIndirectos: datosEfectosIndirectos[index] })
                })

                ArbolObjetivoService.GuardarDatosArbol($scope.ObjArbol, function (response) {
                    if (response.success) {
                        alertify.alert("<b>Registro Exitoso</b>");
                        $location.url("/Menu");

                    }
                })
                console.log($scope.ObjArbol);
                console.log(datosProblema);
            });

            //VARIABLE PARA VALIDAR CUANDO YA INGRESO LA PRIMERA VEZ A LA VISTA DE RESULTADOS
            var contador = 0;

            //CONSULTA PARA LLENAR OBJETIVO GENERAL Y ESPECIFICOS 
            //ArbolObjetivoService.ConsultarArbolObjetivosFinal($rootScope.proyecto.datos.id, function (response) {
            //    if (response.success) {
            //        $scope.Objetivos = response.ArbolFinal;
            //        $scope.medios1 = response.ArbolFinal.Medios
            //    }
            //})

            //FUNCION PARA PASAR DEL ABROL A LA VISTA DE OBJETIVO GENERAL Y ESPECIFICO.
            $scope.ocultarArbol = function () {
                $("#ArbolObjetivos").hide();
                $("#vistaResultados").hide();
                $("#VistaObjetivos").show();
                $("#resultados").attr("disabled", false);

                if (contador == 0) {
                    if ($rootScope.proyecto.datos.Etapa < 5) {
                        ArbolObjetivoService.ConsultarArbolObjetivosFinal($rootScope.proyecto.datos.id, function (response) {
                            if (response.success) {
                                $scope.Objetivos = response.ArbolFinal;
                                $scope.medios = response.ArbolFinal.Medios
                            }
                        })
                    } else {
                        ArbolObjetivoService.ConsultarDatosObjetivos($rootScope.proyecto.datos.id, function (response) {
                            if (response.success) {
                                $scope.Objetivos.ObjetivoCentral = response.DatosObjetivos.ObjetivoCentral;
                              
                                $scope.medios = [];

                                $.each(response.Especificos, function (index, value) {

                                    $scope.medios.push({ Medio: value.ObjetivoEsp, MediosIndirectos: [index] });

                                })
                            }
                        })

                        $("#verbo").hide();
                        $("#campoObjetivoGeneral").css({ "margin-left": "-10%" });
                        $("#tituloObjetivoGeneral").css({ "margin-left": "18%" });
                       

                    }

                }

            }


            //FUNCION PARA REGRESAR  A LA VISTA DEL ARBOL DE OBJETIVOS. 
            $scope.ocultarObjetivos = function () {
                $("#ArbolObjetivos").show();
                $("#VistaObjetivos").hide();
                $("#vistaResultados").hide();
            }

            $scope.medio1 = "";

            //FUNCION PARA PASAR DE LA VISTA OBJETIVOS A RESULTADOS.
            $scope.mostrarResultados = function () {

                $("#ArbolObjetivos").hide();
                $("#VistaObjetivos").hide();
                $("#vistaResultados").show();

                if (contador == 0) {
                    if ($rootScope.proyecto.datos.Etapa < 5) {
                        ArbolObjetivoService.ConsultarArbolObjetivosFinal($rootScope.proyecto.datos.id, function (response) {
                            if (response.success) {
                                //$scope.medios = response.ArbolFinal.Medios;
                                $scope.mediosIndirectos = [];

                                $.each($scope.medios, function (index, value) {
                                    for (var i = 0; i < 3; i++) {
                                        if (value.MediosIndirectos[i] != "") {
                                            $scope.mediosIndirectos.push({ idMedio: value.Medio, medioIndirectos: value.MediosIndirectos[i], Resultado: "", Herramienta: "", Producto: "" })

                                        } else {
                                            $scope.mediosIndirectos.push({ idMedio: value.Medio, medioIndirectos: "", Resultado: "", Herramienta: "", Producto: "" })

                                        }

                                    }
                                })
                                $("#guardarObjetivos").css({ "display": "block" });
                            }
                        })
                    } else {

                        ArbolObjetivoService.ConsultarDatosObjetivos($rootScope.proyecto.datos.id, function (response) {
                            if (response.success) {
                                $scope.Objetivos.ObjetivoCentral = response.DatosObjetivos.ObjetivoCentral;
                                $scope.prueba = response.DatosObjetivos.Objetivos
                                //$scope.medios = [];
                                //$.each($scope.prueba, function (index, value) {
                                //    if (index == 0 || index == 3 || index == 6 || index == 9 || index == 12 || index == 15) {
                                //        $scope.medios.push({ Medio: value.ObjetivoEsp, MediosIndirectos: [index] });
                                //    }
                                //})

                                $scope.medios = [];

                                $.each(response.Especificos, function (index, value) {

                                    $scope.medios.push({ Medio: value.ObjetivoEsp, MediosIndirectos: [index] });

                                })

                                console.log($scope.prueba);

                                $scope.mediosIndirectos = [];

                                console.log($scope.prueba);
                                $.each($scope.prueba, function (index, value) {
                                    if (value.ObjetivoEsp != null) {
                                        $scope.mediosIndirectos.push({ idMedio: value.ObjetivoEsp, medioIndirectos: value.Resultado1, Resultado: value.MedidaResultado, Herramienta: value.HerramientaResultado, Producto: value.ProductoResultado })

                                    }
                                })
                            }
                        })
                    }

                    //$scope.Objetivos.ObjetivoCentral = $scope.Objetivos.ObjetivoCentral;
                }
                $("#guardarObjetivos").css({ "display": "none" });
                contador++;
            }


            //FUNCION PARA GUARDAR TODOS LOS DATOS DE OBJETIVOS.
            $scope.guardarObjetivos = function () {
                var verbo = $("#verbo").val();
                $scope.ObjetivosFinales.ObjetivoCentral = verbo + " " + $scope.Objetivos.ObjetivoCentral;


                $scope.ObjetivosFinales1 = [];
                $.each($scope.mediosIndirectos, function (index, value) {

                    if (value.medioIndirectos != undefined) {

                        $scope.ObjetivosFinales1.push({ ObjetivoEsp: value.idMedio, Resultado1: value.medioIndirectos, MedidaResultado: value.Resultado, HerramientaResultado: value.Herramienta, ProductoResultado: value.Producto })

                    } else {
                        $scope.ObjetivosFinales1.push({ ObjetivoEsp: value.idMedio, Resultado1: "", MedidaResultado: value.Resultado, HerramientaResultado: value.Herramienta, ProductoResultado: value.Producto })

                    }
                })

                $scope.ObjetivosFinales.Objetivos = $scope.ObjetivosFinales1;

                var con = 0;
                var recorrer = $scope.ObjetivosFinales.Objetivos;
                $.each(recorrer, function (index, value) {

                    if (value.Resultado1 != "" && (value.MedidaResultado == "" || value.HerramientaResultado == "" || value.ProductoResultado == "")) {
                        con++;
                    }
                })

                if (con == 0) {
                    ArbolObjetivoService.GuardarObjetivos($scope.ObjetivosFinales, function (response) {
                        if (response.success) {
                           
                            alertify.alert("<b>Registro Exitoso</b>");
                            $location.url("/Menu");
                        }
                    });

                } else {
                    alertify.success("Ups! Debes completar los campos de cada resultado esperado.");
                }
                
            }
        }]);