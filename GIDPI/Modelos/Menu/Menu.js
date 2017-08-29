﻿ManualApp.controller('MenuController',
    ['$scope', '$rootScope', '$location', 'MenuService', '$cookies', '$cookieStore', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, MenuService, $cookies, $cookieStore, $routeParams, $sce) {


            $scope.DatosBasicos = function () {
                var color = $("#iconoUno").attr('value');
                //console.log(cosa);
                if (color == "1") {
                    alertify.alert("<b>Debe abrir un proyecto o  crear uno nuevo</b>", function () {
                        $("#misProyectos").toggle("slow");
                    });
                } else {
                    $location.url("/InfoBasica");
                }

            };

            $scope.Matriz = function () {
                var color = $("#iconoDos").attr('value');
                if (color == 1) {
                    alertify.alert('<b>Debes culminar el paso anterior</b>');
                } else {
                    $location.url("/Matriz");
                }
            };

            $scope.Arbol = function () {
                var color = $("#iconoTres").attr('value');
                if (color == 1) {
                    alertify.alert('<b>Debes culminar el paso anterior</b>');
                } else {
                    $location.url("/ArbolProblema");
                }
            };


            $scope.ArbolObjetivos = function () {
                var color = $("#iconoCuatro").attr('value');
                if (color == 1) {
                    alertify.alert('<b>Debes culminar el paso anterior</b>');
                } else {
                    $location.url("/Objetivos");
                }
            };


            $(".icono-menu").click(function () {

                $(".sobre-menu-principal").fadeIn();
                $(".menu-principal").animate({
                    left: "0"
                }, 500);
            });

            $(".sobre-menu-principal").click(function () {

                $(".sobre-menu-principal").fadeOut();
                $(".menu-principal").animate({
                    left: "-1000px"
                }, 500);
            });



            //Consulta todos los proyectos del usuario logueado
            MenuService.ConsultarProyectos($rootScope.globals.currentUser.id, function (response) {
                if (response.success) {
                    $scope.Proyectos = response.proyectos;
                }
            })


            //Función para crear un nuevo proyecto
            $scope.CrearProyecto = function () {
                //location.reload();
                $("#circuloUno").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoUno").attr("src", "images/datosBasicosAct.png");
                $("#iconoUno").attr('value', 2);
                $('#flechaUno').fadeIn("slow");
                
                MenuService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                    if (response.success) {

                        $rootScope.Proyecto = {
                            datos: {
                                id: response.proyecto.IdProyecto,
                                Tema: response.proyecto.TemaProyecto,
                                IdUsuario: response.proyecto.IdUsuario,
                                Etapa: response.proyecto.Etapa
                            }
                        };

                        $scope.EtapasProyecto(response.proyecto.Etapa);
                    }

                });
               
                $cookies.remove("datosProyecto");
               

            }

            //Función para cargar todos los datos de un proyecto ya iniciado
            $scope.AbrirProyecto = function (IdProyecto) {
               
                MenuService.AbrirProyecto(IdProyecto, function (response) {
                    if (response.success) {

                        if ($rootScope.proyecto != undefined) {
                            $cookies.remove("datosProyecto");
                        }

                        $rootScope.Proyecto = {
                            datos: {
                                id: response.proyecto.IdProyecto,
                                Tema: response.proyecto.TemaProyecto,
                                IdUsuario: response.proyecto.IdUsuario,
                                Etapa: response.proyecto.Etapa
                            }
                        };

                        $cookies.putObject("datosProyecto", $rootScope.Proyecto);
                        $rootScope.proyecto = $cookieStore.get('datosProyecto');
                        
                        $scope.EtapasProyecto(response.proyecto.Etapa);
                    }

                })
            }

            if ($rootScope.proyecto != undefined) {
                MenuService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                    if (response.success) {
                        
                        $rootScope.Proyecto = {
                            datos: {
                                id: response.proyecto.IdProyecto,
                                Tema: response.proyecto.TemaProyecto,
                                IdUsuario: response.proyecto.IdUsuario,
                                Etapa: response.proyecto.Etapa
                            }
                        };

                        $scope.EtapasProyecto(response.proyecto.Etapa);
                    }

                });
            }

            //ANIMACIÓN MENÚ
            if ($rootScope.proyecto != undefined) {

                MenuService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                    if (response.success) {
                        $scope.EtapasProyecto();
                    }

                });
            
                //if (response.proyecto.Etapa >= 1) {
                //    $("#circuloUno").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                //    $("#iconoUno").attr("src", "images/datosBasicosAct.png");
                //    $("#iconoUno").attr('value', 2);
                //    $('#flechaUno').fadeIn("slow");

                //    $("#circuloDos").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                //    $("#iconoDos").attr("src", "images/lluviaIdeasAct.png");
                //    $("#iconoDos").attr('value', 2);
                //    $('#flechaDos').fadeIn("slow");
                //}
                //if ($rootScope.proyecto.datos.Etapa >= 2) {

                //    $("#circuloTres").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                //    $("#iconoTres").attr("src", "images/arbolProbAct.png");
                //    $("#iconoTres").attr('value', 2);
                //    $('#flechaTres').fadeIn("slow");
                //}

                //if ($rootScope.proyecto.datos.Etapa >= 3) {

                //    $("#circuloCuatro").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                //    $("#iconoCuatro").attr("src", "images/arbolAct.png");
                //    $("#iconoCuatro").attr('value', 2);
                //    $('#flechaCuatro').fadeIn("slow");
                //}

                //if ($rootScope.proyecto.datos.Etapa >= 4) {

                //    $("#circuloCinco").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                //    $("#iconoCinco").attr("src", "images/perfilAct.png");
                //    $("#iconoCinco").attr('value', 2);
                //    $('#flechaCinco').fadeIn("slow");
                //}

                //if ($rootScope.proyecto.datos.Etapa >= 5) {
                //    $("#circuloSeis").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                //    $("#circuloSeis").attr("src", "images/graficaAct.png");
                //    $("#circuloSeis").attr('value', 2);
                //    $('#flechaSeis').fadeIn("slow");
                //}

                //if ($rootScope.proyecto.datos.Etapa >= 6) {
                //    $("#circuloSiete").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                //    $("#circuloSiete").attr("src", "images/calendarioAct.png");
                //    $("#circuloSiete").attr('value', 2);
                //    $('#flechaSiete').fadeIn("slow");
                //}
                //if ($rootScope.proyecto.datos.Etapa >= 7) {
                //    $("#circuloOcho").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                //    $("#circuloOcho").attr("src", "images/matrizAct.png");
                //    $("#circuloOcho").attr('value', 2);
                //    $('#flechaOcho').fadeIn("slow");
                //}
              
            }

            //Función para colocar opacos los circulos
            $scope.DeshabilitarCirculos = function () {

                $("#circuloDos").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoDos").attr("src", "images/lluviaIdeas.png");
                $("#flechaDos").fadeOut("fast");

                $("#circuloTres").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#circuloTres").attr("src", "images/lluviaIdeas.png");
                $("#flechaTres").fadeOut("fast");

            }

            //Función para activar los circulos ejecutados de un proyecto
            $scope.EtapasProyecto = function (Etapa) {
                if (Etapa >= 1) {
                    $("#circuloUno").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoUno").attr("src", "images/datosBasicosAct.png");
                    $("#iconoUno").attr('value', 2);
                    $('#flechaUno').fadeIn("slow");

                    $("#circuloDos").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoDos").attr("src", "images/lluviaIdeasAct.png");
                    $("#iconoDos").attr('value', 2);
                    $('#flechaDos').fadeIn("slow");
                }
                if (Etapa >= 2) {

                    $("#circuloTres").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoTres").attr("src", "images/arbolProbAct.png");
                    $("#iconoTres").attr('value', 2);
                    $('#flechaTres').fadeIn("slow");
                }

                if (Etapa >= 3) {

                    $("#circuloCuatro").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoCuatro").attr("src", "images/arbolAct.png");
                    $("#iconoCuatro").attr('value', 2);
                    $('#flechaCuatro').fadeIn("slow");
                }

                if (Etapa >= 4) {

                    $("#circuloCinco").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoCinco").attr("src", "images/perfilAct.png");
                    $("#iconoCinco").attr('value', 2);
                    $('#flechaCinco').fadeIn("slow");
                }

                if (Etapa >= 6) {
                    $("#circuloSeis").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#circuloSeis").attr("src", "images/graficaAct.png");
                    $("#circuloSeis").attr('value', 2);
                    $('#flechaSeis').fadeIn("slow");
                }

                if ($rootScope.proyecto.datos.Etapa >= 6) {
                    $("#circuloSiete").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#circuloSiete").attr("src", "images/calendarioAct.png");
                    $("#circuloSiete").attr('value', 2);
                    $('#flechaSiete').fadeIn("slow");
                }
                if ($rootScope.proyecto.datos.Etapa >= 7) {
                    $("#circuloOcho").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#circuloOcho").attr("src", "images/matrizAct.png");
                    $("#circuloOcho").attr('value', 2);
                    $('#flechaOcho').fadeIn("slow");
                }
            }


            //función para mostrar MIS PROYECTOS

            $("#proyectos").click(function () {
                $("#misProyectos").toggle("slow");
            });

        }]);



