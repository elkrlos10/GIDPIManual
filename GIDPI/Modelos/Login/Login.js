ManualApp.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'LoginService', '$cookies', '$cookieStore', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, LoginService,$cookies, $cookieStore, $routeParams, $sce) {



            $scope.PersonaNatural = {
                Nombre: "",
                Apellidos: "",
                Documento: "",
                Usuario: "",
                Contraseña: "",
                Email: "",
                Telefono: "",
            }

            $scope.PersonaJuridica = {
                RazonSocial: "",
                Nit: "",
                SectorEconomico: "",
                Responsable: "",
                Telefono: "",
                Usuario: "",
                contrasena: ""
            }


            $scope.Usuario = {
                Usuario1: "",
                Contrasena: "",
                TipoUsuario:"",
            };

           
        
            $scope.RegistroPersonaNatural = function () {
                
                LoginService.RegistrarPersonaNatural($scope.PersonaNatural, function (response) {

                    if (response.success ) {
                    
                        alertify.alert("<b>Registro Exitoso</b>", function () {
                            location.reload();
                        });
                    }
                });
            }

            $scope.RegistroPersonaJuridica = function () {

                LoginService.RegistroPersonaJuridica($scope.PersonaJuridica, function (response) {

                    if (response.success) {

                        alertify.alert("<b>Registro Exitoso</b>", function () {
                            location.reload();
                        });

                    }
                });
            }


            $scope.ConsultarUsuario = function () {
                LoginService.ConsultarUsuario($scope.Usuario, function (response) {

                    if (response.success) {
                        alertify.success("Bienvenido a GIDPI");

                        $rootScope.globals = {
                            currentUser: {
                                id: response.usuario.IdUsuario,
                                nombre: response.usuario.Usuario1,
                                //apellido: response.usuario.Usuario1.Apellido,
                                //cedula: response.usuario.Cedula,
                                //tipousuario: response.usuario.TipoUsuario,
                                //idpersona: response.usuario.IdPersona
                            }
                        };
                        $cookies.putObject("username", $rootScope.globals);
                        
                        $location.url('/Menu');
                    }
                });

            }




        }]);