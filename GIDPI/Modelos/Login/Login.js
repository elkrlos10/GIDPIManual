ManualApp.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'LoginService', '$cookies', '$cookieStore', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, LoginService,$cookies, $cookieStore, $routeParams, $sce) {



            $scope.PersonaNatural = {
                Nombre: "",
                Apellidos: "",
                Documento: "",
                Usuario: "",
                Contrasena: "",
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
                Contrasena: ""
            }


            $scope.Usuario = {
                Usuario1: "",
                Contrasena: "",
                TipoUsuario:"",
            };

           
        
            $scope.RegistroPersonaNatural = function () {

                if ($scope.PersonaNatural.Nombre == null || $scope.PersonaNatural.Nombre == ""  ) {
                    alertify.error("El campo Nombre no puede estar vacio");
                    return false;
                } else if ($scope.PersonaNatural.Apellidos == null || $scope.PersonaNatural.Apellidos == "") {
                    alertify.error("El campo Apellidos no puede estar vacio");
                    return false;


                }else  if ($scope.PersonaNatural.Documento == null || $scope.PersonaNatural.Documento == ""  ) {
                    alertify.error("El campo Documento no puede estar vacio");
                    return false;
                }else  if ($scope.PersonaNatural.Usuario == null || $scope.PersonaNatural.Usuario == ""  ) {
                    alertify.error("El campo Usuario no puede estar vacio");
                    return false;
                
                } else if ($scope.PersonaNatural.Contrasena == null || $scope.PersonaNatural.Contrasena == "") {
                    alertify.error("El campo Contraseña no puede estar vacio");
                    return false;
                }else if ($scope.PersonaNatural.Email == null || $scope.PersonaNatural.Email == ""  ) {
                    alertify.error("El campo Email no puede estar vacio o debe tener una direccion correcta");
                    return false;
          
                }else {
                    LoginService.RegistrarPersonaNatural($scope.PersonaNatural, function (response) {

                        if (response.success ) {
                    
                            alertify.alert("<b>Registro Exitoso</b>", function () {
                                location.reload();
                            });
                        }
                    });
                }
            }

            $scope.RegistroPersonaJuridica = function () {

                if ($scope.PersonaJuridica.RazonSocial == null || $scope.PersonaJuridica.RazonSocial == "") {
                    alertify.error("El campo RazonSocial no puede estar vacio");
                    return false;
                } else if ($scope.PersonaJuridica.Nit == null || $scope.PersonaJuridica.Nit == "") {
                    alertify.error("El campo Nit no puede estar vacio");
                    return false;


                }else  if ($scope.PersonaJuridica.SectorEconomico == null || $scope.PersonaJuridica.SectorEconomico == ""  ) {
                    alertify.error("El campo SectorEconomico no puede estar vacio");
                    return false;
                }else  if ($scope.PersonaJuridica.Responsable == null || $scope.PersonaJuridica.Responsable == ""  ) {
                    alertify.error("El campo Responsable no puede estar vacio");
                    return false;
                
             
                } else if ($scope.PersonaJuridica.Email == null || $scope.PersonaJuridica.Email == "") {
                    alertify.error("El campo Email no puede estar vacio o debe tener una direccion correcta");
                    return false;

                }else  if ($scope.PersonaJuridica.Usuario == null || $scope.PersonaJuridica.Usuario == ""  ) {
                    alertify.error("El campo Usuario no puede estar vacio");
                    return false;
                }else  if ($scope.PersonaJuridica.Contrasena == null || $scope.PersonaJuridica.Contrasena == ""  ) {
                    alertify.error("El campo contraseña no puede estar vacio");
                    return false;
                } else {
                    LoginService.RegistroPersonaJuridica($scope.PersonaJuridica, function (response) {

                        if (response.success) {

                            alertify.alert("<b>Registro Exitoso</b>", function () {
                                location.reload();
                            });

                        }
                    });
                }
            }

          

            $scope.ConsultarUsuario = function () {
                if ($scope.Usuario.Usuario1 == null || $scope.Usuario.Usuario1 == "") {
                    alertify.error("Necesita ingresar el campo de Usuario");
                    return false;

                } else if ($scope.Usuario.Contrasena == null || $scope.Usuario.Contrasena == "") {
                    alertify.error("Necesita ingresar el campo de contraseña");
                    return false;
                } else {
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
            }




        }]);