ManualApp.controller('PerfilProyectoController',
    ['$scope', '$rootScope', '$location', 'PerfilProyectoService', '$cookies', '$cookieStore', 'MenuService', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, PerfilProyectoService, $cookies, $cookieStore, MenuService, $routeParams, $sce) {

            $("#containerNombre").show
            $("#containerPerfilProyect").hide();
            $("#btnEditarPerfil").hide();

            $scope.PerfilProyecto = {
                IdProyecto: $rootScope.proyecto.datos.id,
                idPerfilProyecto:"",
                NombreProyecto: "",
                NombreArea: "",
                NumeroProyecto: "",
                Justificacion: ""
            }

            //FUNCIONES DE CAMBIO DE TAP

            //PERFIL DE PROYECTO 

            $scope.MostrarPerilProyecto = function () {
                $("#containerNombre").hide();
                $("#containerPerfilProyect").show();
            }
            //NOMBRE DEL PROYECTO

            $scope.MostrarNombre = function () {
                $("#containerNombre").show();
                $("#containerPerfilProyect").hide();
            }
            //FINALIZA FUNCIONES DE CAMBIO DE TAP


            //TEXTO DEL NOMBRE Y NUMERO DE PROYECTO.
            $scope.AreaConocimiento = {
                "Areas":
                    [
                            {
                                "nombreArea": "AGRONOMIA, VETERINARIA Y AFINES",
                                "id": 0,
                                "numeroArea": [
                                    { "titulo": "AGRONOMIA" },
                                    { "titulo": "ZOOTECNIA" },
                                    { "titulo": "MEDICINA VETERINARIA" }
                                ]
                            },

                            {
                                "nombreArea": "BELLAS ARTES",
                                "id": 1,
                                "numeroArea": [
                                    { "titulo": "ARTES PLASTICAS, VISUALES Y AFINES" },
                                    { "titulo": "OTROS PROGRAMAS ASOCIADOS A BELLAS ARTES" },
                                    { "titulo": "MÚSICA" },
                                    { "titulo": "ARTES REPRESENTATIVAS" },
                                    { "titulo": "PUBLICIDAD Y AFINES" },
                                    { "titulo": "DISEÑO" }
                                ]
                            },
                            {
                                "nombreArea": "CIENCIAS DE LA SALUD",
                                "id": 2,
                                "numeroArea": [
                                    { "titulo": "BACTERIOLOGIA" },
                                    { "titulo": "ODONTOLOGIA" },
                                    { "titulo": "SALUD PUBLICA" },
                                    { "titulo": "OPTOMETRIA, OTROS PROGRAMAS DE CIENCIAS DE LA SALUD" },
                                    { "titulo": "ENFERMERIA" },
                                    { "titulo": "TERAPIAS" },
                                    { "titulo": "MEDICINA" },
                                    { "titulo": "INSTRUMENTACION QUIRURGICA" }
                                ]
                            },
                            {
                                "nombreArea": "CIENCIAS SOCIALES Y HUMANAS",
                                "id": 3,
                                "numeroArea": [
                                    { "titulo": "ANTROPOLOGIA, ARTES LIBERALES" },
                                    { "titulo": "GEOGRAFIA, HISTORIA" },
                                    { "titulo": "SOCIOLOGIA, TRABAJO SOCIAL Y AFINES" },
                                    { "titulo": "FILOSOFIA, TEOLOGIA Y AFINES" },
                                    { "titulo": "PSICOLOGIA" },
                                    { "titulo": "LENGUAS MODERNAS, LITERATURA, LINGUISTICA Y AFINES" },
                                    { "titulo": "FORMACION RELACIONADA CON EL CAMPO MILITAR O POLICIAL" },
                                    { "titulo": "COMUNICACIÓN SOCIAL, PERIODISMO Y AFINES" },
                                    { "titulo": "DEPORTES, EDUCACION FISICA Y RECREACION" },
                                    { "titulo": "DERECHO Y AFINES" },
                                    { "titulo": "CIENCIA POLITICA, RELACIONES INTERNACIONALES" }


                                ]
                            },
                            {
                                "nombreArea": "CIENCIAS DE LA EDUCACION",
                                "id": 4,
                                "numeroArea": [

                                    { "titulo": "EDUCACION" }


                                ]
                            },
                            {
                                "nombreArea": "ECONOMIA ADMINISTRACION CONTADURIA Y AFINES",
                                "id": 5,
                                "numeroArea": [
                                    { "titulo": " ADMINISTRACION" },
                                    { "titulo": "CONTADURIA PUBLICA" },
                                    { "titulo": "ECONOMIA" }
                                ]
                            },

                            {
                                "nombreArea": "MATEMATICAS Y CIENCIAS NATURALES",
                                "id": 6,
                                "numeroArea": [
                                    { "titulo": "BIOLOGIA, MICROBIOLOGIA Y AFINES" },
                                    { "titulo": "FISICA" },
                                    { "titulo": "GEOLOGIA, OTROS PROGRAMAS DE CIENCIAS NATURALES" },
                                    { "titulo": "QUIMICA Y AFINES" },
                                    { "titulo": "MATEMATICAS, ESTADISTICA Y AFINES" }
                                ]
                            }, {
                                "nombreArea": "INGENIERIA ARQUITECTURA URBANISMO Y AFINES",
                                "id": 7,
                                "numeroArea": [
                                    { "titulo": "ARQUITECTURA" },
                                    { "titulo": "INGENIERIA AGRONOMICA, PECUARIA Y AFINES" },
                                    { "titulo": "INGENIERIA DE MINAS, METALURGIA Y AFINES" },
                                    { "titulo": "OTRAS INGENIERIAS" },
                                    { "titulo": "INGENIERIA QUIMICA Y AFINES" },
                                    { "titulo": "INGENIERIA MECANICA Y AFINES" },
                                    { "titulo": "INGENIERIA INDUSTRIAL Y AFINES" },
                                    { "titulo": "INGENIERIA ELECTRONICA, TELECOMUNICACIONES Y AFINES" },
                                    { "titulo": "INGENIERIA ELECTRICA Y AFINES" },
                                    { "titulo": "INGENIERIA DE SISTEMAS, TELEMATICA Y AFINES" },
                                    { "titulo": "INGENIERIA CIVIL Y AFINES" },
                                    { "titulo": "INGENIERIA AGROINDUSTRIAL, ALIMENTOS Y AFINES" },
                                    { "titulo": "INGENIERIA BIOMEDICA Y AFINES" },
                                    { "titulo": "INGENIERIA AMBIENTAL, SANITARIA Y AFINES" },
                                    { "titulo": "INGENIERIA AGRICOLA, FORESTAL Y AFINES" },
                                    { "titulo": "INGENIERIA ADMNISTRATIVA Y AFINES" }

                                ]
                            },

                    ]
            };

            $scope.datos = function (datos) {
                $scope.numeroAreas = [];
                $.each($scope.AreaConocimiento.Areas[datos].numeroArea, function (index, value) {
                    $scope.numeroAreas.push(value.titulo)
                })
            }


            PerfilProyectoService.ConsultarProyecto($rootScope.proyecto.datos.id, function (response) {
                if (response.success) {
                    if (response.Proyecto.Etapa < 7) {
                        $scope.PerfilProyecto.NombreProyecto = response.Proyecto.NombreProyecto;
                    } else {

                        PerfilProyectoService.ConsultarPerfilTerminado($rootScope.proyecto.datos.id, function (response) {
                            if (response.success) {
                                $scope.PerfilProyecto.NombreProyecto = response.perfilProyecto.NombreProyecto;
                                $scope.PerfilProyecto.Justificacion = response.perfilProyecto.Justificacion;
                                $scope.PerfilProyecto.idPerfilProyecto = response.perfilProyecto.idPerfilProyecto

                                //Función para seleccionar  el select nombreArea
                                var text1 = response.perfilProyecto.NombreArea;
                                $("#NombreArea option").filter(function () {
                                    //may want to use $.trim in here
                                    return $(this).text() == text1;
                                }).attr('selected', true);

                                var dato = $("#NombreArea").val();
                                //Función para llenar el el select NumeroArea
                                $scope.datos(dato);

                                //Función para seleccionar el valor del select NumeroArea
                                setTimeout(function () {
                                    var text2 = response.perfilProyecto.NumeroProyecto;
                                    $("#NumeroArea option").filter(function () {
                                        //may want to use $.trim in here
                                        return $(this).text() == text2;
                                    }).attr('selected', true);

                                }, 500);
                            }
                        })
                        $("#btnGuardarPerfil").hide();
                        $("#btnEditarPerfil").show();
                    }
                }
            })

            $scope.GuardarProyecto = function () {
                $scope.PerfilProyecto.NombreArea = $("#NombreArea option:selected").text();
                $scope.PerfilProyecto.NumeroProyecto = $("#NumeroArea").val();

                console.log($scope.PerfilProyecto);
                PerfilProyectoService.GuardarPerfilProyecto($scope.PerfilProyecto, function (response) {
                    if (response.success) {
                        alertify.alert("Registro exitoso");
                        $location.url("/Menu");
                    }

                })
            }

            $scope.editarPerfilProyecto = function () {
                    
                $scope.PerfilProyecto.NombreArea = $("#NombreArea option:selected").text();
                $scope.PerfilProyecto.NumeroProyecto = $("#NumeroArea").val();

                console.log($scope.PerfilProyecto);
                PerfilProyectoService.EditarPerfilProyecto($scope.PerfilProyecto, function (response) {
                    if (response.success) {
                        alertify.alert("Edición exitosa");
                        $location.url("/Menu");
                    }

                })
            }

        }])