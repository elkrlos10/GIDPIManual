anualApp.controller('ArbolProblemaController',
    ['$scope', '$rootScope', '$location', 'ArbolProblemaService', '$cookies','$cookieStore', 'MenuService', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, ArbolProblemaService, $cookies, $cookieStore, MenuService, $routeParams, $sce) {

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
                Causas: [
                  {
                      Causa: "",
                      CausaIndirecta: [
                          {
                              indirecta: ""
                          }
                      ]
                  }
                ],
                Efectos: [
                 {
                     Efecto: "",
                     EfectoIndirecta: [
                         {
                             indirecto: ""
                         }
                     ]
                 }
                ]

            }

            $scope.DatosProyecto = {
                id:"",
                Tema: "",
                IdUsuario: "",
                Etapa:""
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
            $scope.CausasIndTotales = [];
            $scope.EfectosIndTotales = [];


            //VARIABLE Y FUNCIÓN PARA CONSULTAR EL PROYECTO ACTUALIZADO Y CREAR EL ARBOL DE PROBLEMAS
            $scope.IdProyecto = $rootScope.proyecto.datos.id;
            MenuService.AbrirProyecto($scope.IdProyecto, function (response) {
                if (response.success) {
                    $scope.DatosProyecto = response.proyecto;
                    //FUNCIÓN PARA CONSULTAR LOS DATOS DE LA MATRIZ  Y PINTAR EL ARBOL DE PROBLEMAS
                    if ($rootScope.proyecto != undefined) {
                        if ($scope.DatosProyecto.Etapa < 3 ) {
                            ArbolProblemaService.ArbolProblemaProyecto($rootScope.proyecto.datos.id, function (response) {
                                if (response.success == true) {

                                    //APARICION PROBLEMA CENTRAL MODAL
                                    if (response.arbol != null) {

                                        $scope.Arbol.DetalleMat = response.arbol.DetalleMat;
                                        var problemaGeneral = response.arbol.ProblemaGeneral;

                                        alerta1("Consejo.", "En el panel de la izquierda podras crear las causas y efectos.", 5);

                                        //CICLO PARA RECORRER TODOS LOS PROBLEMAS Y SEPARAR CAUSAS Y EFECTOS
                                        $.each($scope.Arbol.DetalleMat, function (index, value) {
                                            if (value.Criterio == "Punto Critico") {
                                                var txtInicial = value.Problema;//capturar texto del problema central en modal
                                                document.querySelector("#txtProblema").value = txtInicial;
                                            }

                                            if (value.Criterio == "Pasivos") {
                                                if (contEfeIndir < 5) {
                                                    $scope.EfectosTotales.push(value);
                                                    contEfeIndir++;
                                                } else {
                                                    $scope.EfectosIndTotales.push(value);
                                                }
                                            }

                                            if (value.Criterio == "Activos") {
                                                if (contCuaIndir < 5) {
                                                    $scope.CausasTotales.push(value);
                                                    contCuaIndir++;
                                                } else {
                                                    $scope.CausasIndTotales.push(value);
                                                }
                                            }
                                        });

                                        //CICLO PARA CREAR LOS EFECTOS EN EL ARBOL
                                        $.each($scope.EfectosTotales, function (index, value) {
                                            if (index < 5) {
                                                img3 = document.createElement("img");
                                                elemento = document.createElement("li");
                                                elemento2 = document.createElement("li");
                                                bloque = document.createElement("div");
                                                borrar = document.createElement("div");
                                                txtArea = document.createElement("textarea");
                                                txtArea.value = value.Problema;
                                                borrar.innerHTML = "<span></span><h6 class='borrarElemento' onclick='borrarElemento(this)'> Borrar</h6>";
                                                bloque.setAttribute("class", "bloque");
                                                txtArea.setAttribute("class", "txtBloque2");
                                                txtArea.setAttribute("maxlength", "140");
                                                efecto.appendChild(elemento).appendChild(bloque).appendChild(borrar);
                                                efecto.querySelector("li:last-child div:last-child").appendChild(txtArea);
                                                document.querySelector("#imgEfecto3").appendChild(img3);
                                                document.querySelector("#efectoIndirecto").appendChild(elemento2);
                                            }

                                        });

                                        //CICLO PARA CREAR EFECTOS INDIRECTOS DEL ARBOL
                                        var indirecto1 = 1
                                        $.each($scope.EfectosIndTotales, function (index, value) {

                                            if (index == 3 || index == 6 || index == 9 || index == 12) {
                                                indirecto1++;
                                            }

                                            bloque = document.createElement("div");
                                            borrar = document.createElement("span");
                                            txtArea = document.createElement("textarea");
                                            txtArea.value = value.Problema;
                                            borrar.innerHTML = "<h6 class='borrarElemento' onclick='borrarElemento2(this)'> Borrar</h6>";
                                            bloque.setAttribute("class", "bloque2");
                                            txtArea.setAttribute("class", "txtBloque3");
                                            txtArea.setAttribute("maxlength", "140");
                                            efectoIndirectoUl.querySelector("li:nth-child(" + indirecto1 + ")").appendChild(bloque).appendChild(txtArea);
                                            efectoIndirectoUl.querySelector("li:nth-child(" + indirecto1 + ") div:last-child").appendChild(borrar);
                                        })

                                        //CICLO PARA CREAR LOS CAUSAS EN EL ARBOL
                                        $.each($scope.CausasTotales, function (index, value) {
                                            if (index < 5) {

                                                img3 = document.createElement("img");
                                                elemento = document.createElement("li");
                                                elemento2 = document.createElement("li");
                                                bloque = document.createElement("div");
                                                borrar = document.createElement("div");
                                                txtArea = document.createElement("textarea");
                                                txtArea.value = value.Problema;
                                                borrar.innerHTML = "<span></span><h6 class='borrarElemento' onclick='borrarElemento(this)'> Borrar</h6>";
                                                bloque.setAttribute("class", "bloque");
                                                txtArea.setAttribute("class", "txtBloque2");
                                                txtArea.setAttribute("maxlength", "140");
                                                causa.appendChild(elemento).appendChild(bloque).appendChild(borrar);
                                                causa.querySelector("li:last-child div:last-child").appendChild(txtArea);
                                                document.querySelector("#imgCausa3").appendChild(img3);
                                                document.querySelector("#causaIndirecta").appendChild(elemento2);
                                            }

                                        });

                                        //CICLO PARA CREAR CAUSAS INDIRECTAS DEL ARBOL
                                        var indirecto = 1
                                        $.each($scope.CausasIndTotales, function (index, value) {

                                            if (index == 3 || index == 6 || index == 9 || index == 12) {
                                                indirecto++;
                                            }

                                            bloque = document.createElement("div");
                                            borrar = document.createElement("span");
                                            txtArea = document.createElement("textarea");
                                            txtArea.value = value.Problema;
                                            borrar.innerHTML = "<h6 class='borrarElemento' onclick='borrarElemento2(this)'> Borrar</h6>";
                                            bloque.setAttribute("class", "bloque2");
                                            txtArea.setAttribute("class", "txtBloque3");
                                            txtArea.setAttribute("maxlength", "140");
                                            causaIndirectaUl.querySelector("li:nth-child(" + indirecto + ")").appendChild(bloque).appendChild(txtArea);
                                            causaIndirectaUl.querySelector("li:nth-child(" + indirecto + ") div:last-child").appendChild(borrar);

                                        })


                                    } else {
                                        modalOn("#crearProblemaCentral");

                                        //ASIGNAR EL PROBLEMA CENTRAL PRIMERA VEZ
                                        document.querySelector("#btnProblemaCentral").addEventListener("click", function () {
                                            var txtInicial = document.querySelector("#txtProblemaInicial").value; //capturar texto del problema central en modal
                                            if (txtInicial.length == 0 || txtInicial == " ") { //validar si viene vacio
                                                alert("Debes ingresar un problema central");
                                            } else {
                                                document.querySelector("#txtProblema").value = txtInicial;
                                                modalOff();
                                                alerta1("Consejo.", "En el panel de la izquierda podras crear las causas y efectos.", 5);
                                            }
                                        });
                                    }
                                }
                            })
                        } else {
                            ArbolProblemaService.ConsultarArbolFinal($rootScope.proyecto.datos.id, function (response) {
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
                                    console.log($scope.EfectosIndTotales);
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

                                    console.log($scope.CausasIndTotales);
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
                                $("#guardar").hide();
                            })
                        }
                    }

                }

            })
            

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
            $scope.guardar = function () {


                var datosProblema = document.querySelector("#txtProblema").value;
                var datosEfectos = [];
                var datosCausas = [];
                var datosEfectosIndirectos = [];
                var datosCausasIndirectos = [];

                for (var i = 0; i < efectos.length; i++) {
                    var EfectosVacios = document.querySelector("#efecto li:nth-child(" + (i + 1) + ") textarea").value;
                    if (EfectosVacios != "") {
                        datosEfectos[i] = document.querySelector("#efecto li:nth-child(" + (i + 1) + ") textarea").value;
                    } else {
                        alertify.success("Ups! tienes algún efecto vacio");
                        return;
                    }
                }

                for (var i = 0; i < causas.length; i++) {
                    var CausasVacias = datosCausas[i] = document.querySelector("#causa li:nth-child(" + (i + 1) + ") textarea").value
                    if (CausasVacias != "") {
                        datosCausas[i] = document.querySelector("#causa li:nth-child(" + (i + 1) + ") textarea").value;
                    } else {
                        alertify.success("Ups! tienes alguna causa vacia");
                        return;
                    }
                }

                for (var i = 0; i < efectos.length; i++) {
                    var cadaLiIndirecto = [];

                    for (var e = 0; e < document.querySelectorAll("#efecto" + (i + 1) + "indirecto div").length; e++) {
                        var EfectosIndirectasVacias = cadaLiIndirecto[e] = document.querySelector("#efecto" + (i + 1) + "indirecto div:nth-child(" + (e + 1) + ") textarea").value;

                        if (EfectosIndirectasVacias != "") {
                            cadaLiIndirecto[e] = document.querySelector("#efecto" + (i + 1) + "indirecto div:nth-child(" + (e + 1) + ") textarea").value;
                        } else {
                            alertify.success("Ups! tienes algún efecto indirecto vacio");
                            return;
                        }

                    }
                    datosEfectosIndirectos.push(cadaLiIndirecto);
                }

                for (var i = 0; i < causas.length; i++) {
                    var cadaLiIndirecto = [];

                    for (var e = 0; e < document.querySelectorAll("#causa" + (i + 1) + "indirecto div").length; e++) {
                        var CausasIndirectasVacias = cadaLiIndirecto[e] = document.querySelector("#causa" + (i + 1) + "indirecto div:nth-child(" + (e + 1) + ") textarea").value;
                        if (CausasIndirectasVacias != "") {
                            cadaLiIndirecto[e] = document.querySelector("#causa" + (i + 1) + "indirecto div:nth-child(" + (e + 1) + ") textarea").value;
                        } else {
                            alertify.success("Ups! tienes alguna causa indirecta vacia");
                            return;
                        }

                    }
                    datosCausasIndirectos.push(cadaLiIndirecto);
                }
                //console.log(datosEfectosIndirectos);
                //console.log(datosCausasIndirectos);
                //console.log(datosEfectos);
                //console.log(datosCausas);

                $scope.ObjArbol.ProblemaCentral = datosProblema;
                $.each(datosCausas, function (index, value) {
                    if (value != "") {
                        $scope.ObjArbol.Causas.push({ Causa: value, CausaIndirecta: datosCausasIndirectos[index] })
                    }


                })
                $.each(datosEfectos, function (index, value) {

                    $scope.ObjArbol.Efectos.push({ Efecto: value, EfectoIndirecta: datosEfectosIndirectos[index] })
                })

                ArbolProblemaService.GuardarDatosArbol($scope.ObjArbol, function (response) {
                    if (response.success) {
                        alertify.alert("<b>Registro Exitoso</b>");
                        $location.url("/Menu");

                    }
                })
                console.log($scope.ObjArbol);
                console.log(datosProblema);
            }

            //document.querySelector("#guardar").addEventListener("click", function () {

            //});

            $scope.atras = function () {

                $location.url("/Menu");

            }

        }]);