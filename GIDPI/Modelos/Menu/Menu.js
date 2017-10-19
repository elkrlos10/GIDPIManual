ManualApp.controller('MenuController',
    ['$scope', '$rootScope', '$location', 'MenuService', '$cookies', '$cookieStore', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, MenuService, $cookies, $cookieStore, $routeParams, $sce) {

            //Funciones para direccionar a las vistas 
            $scope.DatosBasicos = function () {
                var color = $("#iconoUno").attr('value');
                //console.log(cosa);
                if (color == "1") {
                    swal({
                        text: 'Debe abrir un proyecto o  crear uno nuevo',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    }).then(function () {
                        $("#misProyectos").toggle("slow");
                    });
                } else {
                    $location.url("/InfoBasica");
                }

            };

            $scope.Matriz = function () {
                var color = $("#iconoDos").attr('value');
                if (color == 1) {
                    swal({
                        text: 'Debes culminar el paso anterior',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                } else if ($rootScope.proyecto.datos.Etapa > 2) {
                    MenuService.consultarMatriz($rootScope.proyecto.datos.id, function (response) {
                        if (response.success) {
                            $location.url("/Matriz");
                        }else{
                            swal({
                                text: 'El árbol esta hecho',
                                confirmButtonColor: '#238276',
                                width: '25%',
                                allowOutsideClick: false

                            })
                        }
                    })
                }

                else {
                    $location.url("/Matriz");
                }
            };

            $scope.Arbol = function () {
                var color = $("#iconoTres").attr('value');
                if (color == 1) {
                    swal({
                        text: 'Debes culminar el paso anterior',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                } else {
                    $location.url("/ArbolProblema");
                    location.reload();
                }
            };

            $scope.ArbolObjetivos = function () {
                var color = $("#iconoCuatro").attr('value');
                if (color == 1) {
                    swal({
                        text: 'Debes culminar el paso anterior',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                    
                } else {
                    $location.url("/Objetivos");
                    location.reload();
                }
            };

            $scope.Involucrados = function () {
                var color = $("#iconoCinco").attr('value');
                //console.log(cosa);
                if (color == "1") {
                    swal({
                        text: 'Debes culminar el paso anterior',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                } else {
                    $location.url("/Involucrados");
                }

            };


            $scope.Perfil = function () {
                var color = $("#iconoSeis").attr('value');
                //console.log(cosa);
                if (color == "1") {
                    swal({
                        text: 'Debes culminar el paso anterior',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                } else {
                    $location.url("/PerfilProyecto");
                }

            };
            
            $scope.Cronograma = function () {
                var color = $("#iconoSiete").attr('value');
                //console.log(cosa);
                if (color == "1") {
                    swal({
                        text: 'Debes culminar el paso anterior',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                } else {
                    $location.url("/Cronograma");
                }

            };

            $scope.MarcoLogico = function () {
                var color = $("#iconoOcho").attr('value');
                //console.log(cosa);
                if (color == "1") {
                    swal({
                        text: 'Debes culminar el paso anterior',
                        confirmButtonColor: '#238276',
                        width: '25%',
                        allowOutsideClick: false

                    })
                } else {
                    $location.url("/MarcoL");
                }

            };

            //------------------------------------------------------------//


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

            $rootScope.InicioProyecto = 0;
            //Función para crear un nuevo proyecto
            $scope.CrearProyecto = function () {
                //location.reload();
                $rootScope.nombreProyecto = "";
                $("#circuloUno").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoUno").attr("src", "images/datosBasicosAct.png");
                $("#iconoUno").attr('value', 2);
                $('#flechaUno').fadeIn("fast");
                $rootScope.InicioProyecto = 1;

                
                //MenuService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                //    if (response.success) {
                //        $rootScope.Proyecto = {
                //            datos: {
                //                id: response.proyecto.IdProyecto,
                //                Tema: response.proyecto.TemaProyecto,
                //                IdUsuario: response.proyecto.IdUsuario,
                //                Etapa: response.proyecto.Etapa
                //            }
                //        };
                //        $scope.EtapasProyecto(response.proyecto.Etapa);
                //    }
                //});
               
                $cookies.remove("datosProyecto");
                $scope.DeshabilitarCirculos();

            }

            //Función para cargar todos los datos de un proyecto ya iniciado
            $scope.AbrirProyecto = function (IdProyecto) {
                $scope.DeshabilitarCirculos();
                $rootScope.nombreProyecto = "";

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
                        $rootScope.nombreProyecto = response.proyecto.TemaProyecto;

                        $cookies.putObject("datosProyecto", $rootScope.Proyecto);
                        $rootScope.proyecto = $cookieStore.get('datosProyecto');
                        
                        $scope.EtapasProyecto(response.proyecto.Etapa);
                    }

                })
            }

            if ($rootScope.proyecto != undefined) {
                MenuService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                    if (response.success) {
                        
                        $rootScope.proyecto = {
                            datos: {
                                id: response.proyecto.IdProyecto,
                                Tema: response.proyecto.TemaProyecto,
                                IdUsuario: response.proyecto.IdUsuario,
                                Etapa: response.proyecto.Etapa
                            }
                        };
                        $rootScope.nombreProyecto = response.proyecto.TemaProyecto;
                        $scope.EtapasProyecto(response.proyecto.Etapa);
                        $cookies.putObject("datosProyecto", $rootScope.proyecto);
                    }

                });
            }

            //ANIMACIÓN MENÚ
            if ($rootScope.proyecto != undefined) {

                MenuService.AbrirProyecto($rootScope.proyecto.datos.id, function (response) {
                    if (response.success) {
                        //$scope.EtapasProyecto();
                    }
                });
            }

            //Función para colocar opacos los circulos
            $scope.DeshabilitarCirculos = function () {

                $("#circuloDos").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoDos").attr("src", "images/lluviaIdeas.png");
                $("#iconoDos").attr('value', 1);
                $("#flechaDos").fadeOut("fast");

                $("#circuloTres").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoTres").attr("src", "images/arbolProb.png");
                $("#iconoTres").attr('value', 1);
                $("#flechaTres").fadeOut("fast");

                $("#circuloCuatro").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoCuatro").attr("src", "images/arbol.png");
                $("#iconoCuatro").attr('value', 1);
                $("#flechaCuatro").fadeOut("fast");

                $("#circuloCinco").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoCinco").attr("src", "images/perfil.png");
                $("#iconoCinco").attr('value', 1);
                $("#flechaCinco").fadeOut("fast");

                $("#circuloSeis").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoSeis").attr("src", "images/grafica.png");
                $("#iconoSeis").attr('value', 1);
                $("#flechaSeis").fadeOut("fast");

                $("#circuloSiete").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoSiete").attr("src", "images/calendario.png");
                $("#iconoSiete").attr('value', 1);
                $("#flechaSiete").fadeOut("fast");

                $("#circuloOcho").css({ 'background-color': 'rgb(255,255,255)', 'z-index': '1', 'border-radius': '50%' });
                $("#iconoOcho").attr("src", "images/matriz.png");
                $("#iconoOcho").attr('value', 1);
                $("#flechaOcho").fadeOut("fast");
            }

            //Función para activar los circulos ejecutados de un proyecto
            $scope.EtapasProyecto = function (Etapa) {
                if (Etapa >= 1) {
                    $("#circuloUno").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoUno").attr("src", "images/datosBasicosAct.png");
                    $("#iconoUno").attr('value', 2);
                    $('#flechaUno').fadeIn("slow");
                    $("#circuloUno").addClass("animated rotateIn");
                   
                    $(".campo:nth-child(1)").css({ 'left': '33%' })
                    

                    $("#circuloDos").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoDos").attr("src", "images/lluviaIdeasAct.png");
                    $("#iconoDos").attr('value', 2);
                    $('#flechaDos').fadeIn("slow");
                    $("#circuloDos").addClass("animated rotateIn");
                    $(".campo:nth-child(3)").css({ 'right': '25%' })
                    //$("#circuloTres").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    //$("#iconoTres").attr("src", "images/arbolProbAct.png");
                    //$("#iconoTres").attr('value', 2);
                    //$('#flechaTres').fadeIn("slow");
                }
                if (Etapa >= 2) {

                    $("#circuloTres").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoTres").attr("src", "images/arbolProbAct.png");
                    $("#iconoTres").attr('value', 2);
                    $('#flechaTres').fadeIn("slow");
                    $("#circuloTres").addClass("animated rotateIn");
                    $(".campo:nth-child(5)").css({ 'right': '10%' })
                    
                }

                if (Etapa >= 3) {

                    $("#circuloCuatro").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoCuatro").attr("src", "images/arbolAct.png");
                    $("#iconoCuatro").attr('value', 2);
                    $('#flechaCuatro').fadeIn("slow");
                    $("#circuloCuatro").addClass("animated rotateIn");
                    $(".campo:nth-child(7)").css({ 'left': '60%' })
                }

                if (Etapa >= 5) {

                    $("#circuloCinco").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoCinco").attr("src", "images/perfilAct.png");
                    $("#iconoCinco").attr('value', 2);
                    $('#flechaCinco').fadeIn("slow");
                    $("#circuloCinco").addClass("animated rotateIn");
                    $(".campo:nth-child(9)").css({ 'left': '34%' })
                }

                if (Etapa >= 6) {
                    $("#circuloSeis").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoSeis").attr("src", "images/graficaAct.png");
                    $("#iconoSeis").attr('value', 2);
                    $('#flechaSeis').fadeIn("slow");
                    $("#circuloSeis").addClass("animated rotateIn");
                    $(".campo:nth-child(11)").css({ 'left': '5%' })
                }

                if (Etapa >= 7) {
                    $("#circuloSiete").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoSiete").attr("src", "images/calendarioAct.png");
                    $("#iconoSiete").attr('value', 2);
                    $('#flechaSiete').fadeIn("slow");
                    $("#circuloSiete").addClass("animated rotateIn");
                    $(".campo:nth-child(13)").css({ 'left': '-7%' })
                }
                if (Etapa >= 9) {
                    $("#circuloOcho").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                    $("#iconoOcho").attr("src", "images/matrizAct.png");
                    $("#iconoOcho").attr('value', 2);
                    $('#flechaOcho').fadeIn("slow");
                    $("#circuloOcho").addClass("animated rotateIn");
                    $(".campo:nth-child(15)").css({ 'left': '12%' })
                }
            }


            //función para mostrar MIS PROYECTOS

            $("#proyectos").click(function () {
                $("#misProyectos").toggle("slow");
            });

            $scope.borrarProyecto = function () {
                swal({
                    title: '¿Esta seguro?',
                    text: "Si elimina el proyecto ... , perderá toda la información sobre este.",
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
                    MenuService.EliminarProyecto($rootScope.proyecto.datos.id, function (response) {
                        if (response.success) {
                            swal({

                                confirmButtonColor: '#238276',
                                title: 'Borrado!',
                                text: 'Tu proyecto ha sido borrado.',
                                type: 'success'
                            }).then(function () {
                                $scope.DeshabilitarCirculos();
                                $cookies.remove("datosProyecto");
                                $rootScope.nombreProyecto = "";
                                MenuService.ConsultarProyectos($rootScope.globals.currentUser.id, function (response) {
                                    if (response.success) {
                                        $scope.Proyectos = response.proyectos;
                                    }
                                })
                                
                            })
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
                            title : 'Eliminado',
                            text:'El proyecto ha sido eliminado!',
                            type: 'error',
                                 

                        })
                    }
                }
                    
                }
            



        }]);



