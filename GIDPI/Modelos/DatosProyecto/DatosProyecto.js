ManualApp.controller('DatosProyectoController',
    ['$scope', '$rootScope', '$location', 'DatosProyectoService', '$cookies', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, DatosProyectoService, $cookies, $routeParams, $sce) {

            $scope.DatosProyecto = {
                TipoProyecto: "",
                AccionProyecto: "",
                IdMunicipio: "",
                Sector: "",
                TemaProyecto: "",
                IdUsuario: "",
                Etapa: ""
            }

            $scope.atras = function () {
                $location.url("/Menu");
            }
            //Objeto con la lista de acciones a relizar en el proyecto
            $scope.AccionProyecto = [

                "Actualización",
                "Adecuación",
                "Administración",
                "Adquisición",
                "Alfabetización",
                "Ampliación",
                "Análisis",
                "Aplicación",
                "Aportes",
                "Apoyo",
                "Aprovechamiento",
                "Asesoría",
                "Asistencia",
                "Capacitación",
                "Capitalización",
                "Caracterización",
                "Compromiso",
                "Conformación",
                "Consolidación",
                "Construcción",
                "Control",
                "Demarcación",
                "Descontaminación",
                "Diagnostico",
                "Difusión",
                "Divulgación",
                "Dotación",
                "Edición",
                "Elaboración",
                "Erradicación",
                "Estudio",
                "Estudios",
                "Experimentación",
                "Exploración",
                "Explotación",
                "Extensión",
                "Forestación",
                "Formación",
                "Formulación",
                "Fortalecimiento",
                "Habilitación",
                "Identificación",
                "Implantación",
                "Incremento",
                "Innovación",
                "Instalación",
                "Inventario",
                "Inversiones",
                "Investigación",
                "Levantamiento",
                "Mantenimiento",
                "Modernización",
                "Mejoramiento",
                "Nacionalización",
                "Normalización",
                "Optimización",
                "Pavimentación",
                "Prevención",
                "Privatización",
                "Programación",
                "Protección",
                "Reconstrucción",
                "Recopilación",
                "Recreación",
                "Recuperación",
                "Reforestación",
                "Rehabilitación",
                "Remodelación",
                "Renovación",
                "Reparación",
                "Reposición",
                "Restauración",
                "Restructuración",
                "Revisión",
                "Saneamiento",
                "Servicio",
                "Sistematización",
                "Subsidio",
                "Suministro",
                "Sustitución",
                "Titulación",
                "Traslado"

            ]

            //Objeto con lista de sector
            $scope.Sector = [
            "AGRICULTURA Y DESARROLLO RURAL",
             "AMBIENTE Y DESARROLLO SOSTENIBLE",
             "CIENCIA TECNOLOGÍA E INNOVACIÓN",
             "CONGRESO DE LA REPUBLICA",
             "CULTURA",
             "DEFENSA",
             "DEPORTE Y RECREACIÓN",
             "EDUCACIÓN",
             "EMPLEO PUBLICO",
             "FISCALÍA",
             "HACIENDA",
             "INCLUSIÓN SOCIAL Y RECONCILIACIÓN",
             "INFORMACIÓN ESTADÍSTICA",
             "INTELIGENCIA",
             "INTERIOR",
             "JUSTICIA Y DEL DERECHO",
             "MINAS Y ENERGÍA",
             "ORGANISMOS DE CONTROL",
             "PLANEACIÓN",
             "PRESIDENCIA DE LA REPUBLICA",
             "RAMA JUDICIAL",
             "REGISTRADURIA",
             "RELACIONES EXTERIORES",
             "SALUD Y PROTECCIÓN SOCIAL",
            "TECNOLOGÍA DE LA INFORMACIÓN Y LAS COMUNICACIONES",
            "TRABAJO",
            "TRANSPORTE",
            "VIVIENDA, CIUDAD Y TERRITORIO"
            ]

            //$scope.refresh = function () {
            //    $("#div1").load("url que quieres cargar")
            //}

            $scope.ValidacionDatos = function () {
                if ($scope.DatosProyecto.TipoProyecto == "" || $scope.DatosProyecto.TipoProyecto == null || $scope.DatosProyecto.AccionProyecto == "" || $scope.DatosProyecto.AccionProyecto == null ||
                    $scope.DatosProyecto.Sector == "" || $scope.DatosProyecto.Sector == null || $scope.DatosProyecto.IdMunicipio == "" || $scope.DatosProyecto.IdMunicipio == null ||
                    $scope.DatosProyecto.TemaProyecto == "" || $scope.DatosProyecto.TemaProyecto == null) {

                    alertify.success("Faltan campos por completar");
                    return false;

                }
            }

            //Consulta de todos los departamentos para llenar el select
            DatosProyectoService.ConsultarDepartamentos(function (response) {
                if (response.success) {

                    $scope.Departamentos = response.departamentos;
                }

            });

            //Consulta de todos los municipios según el departamneto seleccionado para llenar el select
            $scope.ConsultarMunicipiosDepartamento = function (IdDepartamento) {

                DatosProyectoService.ConsultarMunicipiosDepartamento(IdDepartamento, function (response) {

                    if (response.success == true) {
                        $scope.Municipio = response.municipios;
                    }
                });

            };

            //Función para guardar los datos del proyecto
            $scope.GuardarDatosProyecto = function () {
                $scope.DatosProyecto.Etapa = 1;
                $scope.DatosProyecto.IdUsuario = $rootScope.globals.currentUser.id;
                if (!$scope.ValidacionDatos()) {
                    DatosProyectoService.GuardarDatosProyecto($scope.DatosProyecto, function (response) {
                        if (response.success) {

                            swal({
                                text: 'Registro Exitoso',
                                confirmButtonColor: '#238276',
                                width: '25%',
                            })

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
                            $("#circuloDos").css({ 'background-color': 'rgba(13, 132, 126, 0.24)', 'z-index': '1', 'border-radius': '50%' });
                            $("#iconoDos").attr("src", "images/lluviaIdeasAct.png");
                            $('#flechaDos').fadeIn("slow");
                            $location.url("/Menu");
                        }
                    });
                }
            }

            //Validación para establecer si el usurio tiene un proyecto activo
            if ($rootScope.proyecto != undefined) {
                DatosProyectoService.ConsultarProyecto($rootScope.proyecto.datos.id, function (response) {
                    if (response.success) {
                        var IdMunicipio = response.proyecto.IdMunicipio;

                        DatosProyectoService.ConsultarDepartamentoxMunicipio(IdMunicipio, function (response1) {
                            if (response1.success) {
                                $("#Departamento > option[value='" + response1.departamento.IdDepartamento + "']").attr('selected', 'selected');

                                $scope.ConsultarMunicipiosDepartamento(response1.departamento.IdDepartamento);
                                setTimeout(function () {
                                    $("#Municipio > option[value='" + response.proyecto.IdMunicipio + "']").attr('selected', 'selected');
                                }, 500);

                            }
                        })

                        $scope.DatosProyecto = response.proyecto;
                        $("#BtnGuardar").hide();
                        $("#BtnAtras").show();
                        $("#BtnModificar").show();
                    }
                })
            } else {
                $("#BtnModificar").hide();
            }

            //Función para editar los datos del proyecto
            $scope.ModificarProyecto = function () {
                if ($scope.ValidacionDatos() != false) {
                    $scope.DatosProyecto.IdProyecto = $rootScope.proyecto.datos.id;

                    DatosProyectoService.ModificarProyecto($scope.DatosProyecto, function (response) {
                        if (response.success) {

                            swal({
                                text: 'Modificacion Exitoso',
                                confirmButtonColor: '#238276',
                                width: '25%'

                            })


                            $location.url("/Menu");
                        }
                    })
                }
            }

        }]);