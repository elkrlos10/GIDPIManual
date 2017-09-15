ManualApp.controller('PerfilProyectoController',
    ['$scope', '$rootScope', '$location', 'PerfilProyectoService', '$cookies', '$cookieStore', 'MenuService', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, PerfilProyectoService, $cookies, $cookieStore, MenuService, $routeParams, $sce) {

            $("#containerNombre").show
            $("#containerPerfilProyect").hide();
            $("#btnEditarPerfil").hide();
            $("#editarPerfil2").hide();


            $scope.PerfilProyecto = {
                IdProyecto: $rootScope.proyecto.datos.id,
                idPerfilProyecto: "",
                NombreProyecto: "",
                NombreArea: "",
                NumeroProyecto: "",
                Justificacion: ""
            }

            $scope.PerfilProyecto2 = {
                IdProyecto: $rootScope.proyecto.datos.id,
                Planteamiento:"",
                Impacto: "",
                Poblacion: "",
                Variables: "",
                Tecnicas: "",
                Enfoque: "",
                TipoInvestigacion: "",
                Metodo: "",
                Metodologia: ""



            }



            $scope.ValidarPerfilProyecto = function () {
                if ($scope.PerfilProyecto.NombreProyecto == "" || $scope.PerfilProyecto.NombreArea == "" || $scope.PerfilProyecto.NumeroProyecto == "" || $scope.PerfilProyecto.Justificacion == "") {
                    alertify.success("Faltan campos por completar");
                    return false;
                }
            }


            $scope.ValidarPerfilProyecto2 = function () {

                if ($scope.PerfilProyecto2.Planteamiento == "" || $scope.PerfilProyecto2.Impacto == "" || $scope.PerfilProyecto2.Poblacion == "" || $scope.PerfilProyecto2.Variables == "" ||
                    $scope.PerfilProyecto2.Tecnicas == "" || $scope.PerfilProyecto2.Enfoque == "" || $scope.PerfilProyecto2.TipoInvestigacion == "" || $scope.PerfilProyecto2.Metodo == "" || $scope.PerfilProyecto2.Metodologia == "") {

                    alertify.success("Faltan campos por completar");
                    return false;
                }
            }

            //FUNCIONES DE CAMBIO DE TAP

            //PERFIL DE PROYECTO 

            $scope.MostrarPerilProyecto = function () {
                $("#containerNombre").hide();
                $("#containerPerfilProyect").show();

                PerfilProyectoService.ConsultarProyecto($rootScope.proyecto.datos.id, function (response) {
                    if (response.success) {
                        if (response.Proyecto.Etapa >= 7) {
                            $("#guardarPerfil2").hide();
                            $("#editarPerfil2").show();
                            PerfilProyectoService.ConsultarPerfil2($rootScope.proyecto.datos.id, function (response) {
                                if (response.success) {
                                    $scope.PerfilProyecto2 = response.perfilProyecto2;


                                    var text1 = response.perfilProyecto2.Enfoque;
                                    $("#enfoque option").filter(function () {
                                        //may want to use $.trim in here
                                        return $(this).text() == text1;
                                    }).attr('selected', true);

                                    var text2 = response.perfilProyecto2.TipoInvestigacion;
                                    $("#tipoInve option").filter(function () {
                                        //may want to use $.trim in here
                                        return $(this).text() == text2;
                                    }).attr('selected', true);

                                    var text3 = response.perfilProyecto2.Metodo;
                                    $("#metodo option").filter(function () {
                                        //may want to use $.trim in here
                                        return $(this).text() == text3;
                                    }).attr('selected', true);
                                }

                            })
                        }


                    }
                })

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

            //Funciones de consultar el proyecto
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

            //FUNCION PARA GUARDAR EL PERFIL
            $scope.GuardarProyecto = function () {
                $scope.PerfilProyecto.NombreArea = $("#NombreArea option:selected").text();
                $scope.PerfilProyecto.NumeroProyecto = $("#NumeroArea").val();

                console.log($scope.PerfilProyecto);

                if($scope.ValidarPerfilProyecto()!=false){
                    PerfilProyectoService.GuardarPerfilProyecto($scope.PerfilProyecto, function (response) {
                        if (response.success) {
                            $("#containerNombre").hide();
                            $("#containerPerfilProyect").show();
                            swal({
                                text: 'Registro Exitoso',
                                confirmButtonColor: '#238276',
                                width: '25%'

                            })
                           
                            //$location.url("/Menu");
                        }

                    })
                }
               
            }


            //FUNCION PARA EDITAR EL PERFIL
            $scope.editarPerfilProyecto = function () {

                $scope.PerfilProyecto.NombreArea = $("#NombreArea option:selected").text();
                $scope.PerfilProyecto.NumeroProyecto = $("#NumeroArea").val();
                if ($scope.ValidarPerfilProyecto()!=false) {
                    PerfilProyectoService.EditarPerfilProyecto($scope.PerfilProyecto, function (response) {
                        if (response.success) {
                            swal({
                                text: 'Edición Exitosa',
                                confirmButtonColor: '#238276',
                                width: '25%'

                            })
                           

                        }

                    })
                }
            }

            //OBJETOS DE LOS SELECTS ENFOQUE, INVESTIGACION Y METODO 
            $scope.Enfoque = [

                    {
                        id: "Cuantitativo",
                        significado: "Aplica para investigaciones cuyo objetivo principal es la medición o cuantificación de las variables del estudio en función de su magnitud, extensión o cantidad. Utiliza herramientas de las matemáticas y la estadística. Se caracteriza porque implica la identificación de muestras numerosas o de gran tamaño."
                    },
                    {
                        id: "Cualitativo",
                        significado: "Aplica para investigaciones cuyo objetivo principal es la interpretación o descripción de los fenómenos u objetos de estudio a partir de sus cualidades. Aunque puede apoyarse en algunas mediciones, su propósito central es analizar o caracterizar el objeto de estudio a partir de esas mediciones."
                    }, {
                        id: "Mixto",
                        significado: "Aplica para investigaciones cuyo objetivo principal implica la mezcla de los dos anteriores. Esto es, el objeto de estudio es abordado tanto desde sus cualidades como desde su cantidad."
                    }
            ]

            $scope.TipoInvesticion = [
                {
                    id: "Analitica",
                    significado: "Tiene como objetivo principal analizar un evento y comprenderlo en términos de sus aspectos menos evidentes. Los análisis de resultados que usualmente se hacen no convierten a una investigación en analítica."

                }
                , {
                    id: "Correlacional",
                    significado: "Es aquel tipo de estudio que persigue medir el grado de relación existente entre dos o más conceptos o variables."

                }, {
                    id: "Confirmatoria",
                    significado: "Verifica hipótesis referidas a la relación entre variables o eventos"
                }, {
                    id: "Comparativa",
                    significado: "Su objetivo es lograr la identificación de diferencias o semejanzas con respecto a la aparición de un evento en dos o más contextos. "

                }, {
                    id: "Descriptiva",
                    significado: "Tiene como objetivo central lograr la descripción o caracterización de un evento de estudio dentro de un contexto, sin pretender establecer explicaciones o relaciones entre variables"

                }, {
                    id: "Explorativa",
                    significado: "Se utiliza cuando se aborda pro primera vez un problema o tema de investigación, o cuando éste aún no ha sido suficientemente estudiado y las condiciones existentes no son aún determinantes."
                }, {
                    id: "Explicativa",
                    significado: "Se ocupa de la generación de teorías, determina las causas de un evento. En la investigación explicativa se pretende detectar las relaciones entre eventos mediante relaciones causa/efecto."
                }, {
                    id: "Predictiva",
                    significado: "Tiene como propósito central prever o anticipar situaciones futuras, a partir de fenómenos actuales."
                }, {
                    id: "Proyectiva",
                    significado: "Consiste en la elaboración de una propuesta o modelo para solucionar un problema. Es la opción propia de los estudios para empresas específicas."
                }

            ]

            $scope.Metodo= [
                {
                    id: "Historico",
                    significado: "Se abordan los fenómenos de estudio como productos de un proceso de desarrollo histórico y se tienen en consideración las condiciones de su aparición y evolución hasta el estado actual."
                },
                {
                    id: "Antes-Despues",
                    significado: "Consiste en realizar las mediciones del objeto antes y después de la aplicación del estímulo. Puede ser con un solo grupo o con un grupo experimental y otro de control"
                },
                {
                    id: "Expost-Facto",
                    significado:"A partir de la descripción del fenómeno actual, se hace una retrospectiva hasta el momento de su aparición para encontrar sus causas."
                },
                {
                    id: "Estudio de caso",
                    significado: "Este método es típico de las investigaciones o estudios desarrollados para una empresa específica"

                },
                {
                    id: "Fenomenològico",
                    significado: "Pretende interpretar y comprender el fenómeno de estudio dentro de un contexto."
                }

            ]
            //-----------------------------------------------------


            //FUNCIONES PARA MOSTRAR LOS SIGNIFICADOS DE CADA UNO DE LOS ITEMS DE LOS SELECTS ENFOQUE, INVESTIGACION Y METODO 
            $scope.cambioEnfoque = function (Significado) {
                $scope.Significado = Significado;
            }

            $scope.CambioTipoInvesticacion = function (sig) {
                $scope.Sig = sig;
            }

            $scope.CambioMetodo = function (significado) {
                $scope.sigMetodo = significado;
            }
            //---------------------------------------------------------------------------------------------------------------

            //FUNCION PARA GUARDAR LA PARTE 2 DEL PERFIL
            $scope.guardarPerfil2 = function () {
                $scope.PerfilProyecto2.Enfoque = $("#enfoque option:selected").text();
                $scope.PerfilProyecto2.TipoInvestigacion = $("#tipoInve option:selected").text();
                $scope.PerfilProyecto2.Metodo = $("#metodo option:selected").text();
               
                if($scope.ValidarPerfilProyecto2() !=false){
                    PerfilProyectoService.GuardarPerfilProyecto2($scope.PerfilProyecto2, function (response) {
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
              
            }

            //FUNCION PARA EDITAR LA PARTE 2 DEL PERFIL
            $scope.editarPerfilProyectoParte2 = function () {
                $scope.PerfilProyecto.idPerfilProyecto = $rootScope.proyecto.datos.id;
                $scope.PerfilProyecto.NombreArea = $("#NombreArea option:selected").text();
                $scope.PerfilProyecto.NumeroProyecto = $("#NumeroArea").val();

                if ($scope.ValidarPerfilProyecto2() != false) {
                    PerfilProyectoService.EditarPerfilProyecto2($scope.PerfilProyecto2, function (response) {
                        if (response.success) {
                            swal({
                                text: 'Edición Exitosa',
                                confirmButtonColor: '#238276',
                                width: '25%'

                            })
               
                            $location.url("/Menu");
                        }

                    })
                }
            }


            $scope.atras = function () {

                $location.url("/Menu");

            }

        }])