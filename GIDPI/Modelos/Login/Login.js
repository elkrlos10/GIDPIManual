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

            $scope.recuperarContrasena = {
                email:""

            }
           
        
            $scope.RegistroPersonaNatural = function () {

                if ($scope.PersonaNatural.Nombre == null || $scope.PersonaNatural.Nombre == ""  ) {
                    alertify.success("El campo Nombre no puede estar vacio");
                    return false;
                } else if ($scope.PersonaNatural.Apellidos == null || $scope.PersonaNatural.Apellidos == "") {
                    alertify.success("El campo Apellidos no puede estar vacio");
                    return false;
                
                
                }else  if ($scope.PersonaNatural.Documento == null || $scope.PersonaNatural.Documento == ""  ) {
                    alertify.success("El campo Documento no puede estar vacio");
                    return false;
                }else  if ($scope.PersonaNatural.Usuario == null || $scope.PersonaNatural.Usuario == ""  ) {
                    alertify.success("El campo Usuario no puede estar vacio");
                    return false;
                
                } else if ($scope.PersonaNatural.Contrasena == null || $scope.PersonaNatural.Contrasena == "") {
                    alertify.success("El campo Contraseña no puede estar vacio");
                    return false;
                }else if ($scope.PersonaNatural.Email == null || $scope.PersonaNatural.Email == ""  ) {
                    alertify.success("El campo Email no puede estar vacio o debe tener una direccion correcta");
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
                    alertify.success("El campo RazonSocial no puede estar vacio");
                    return false;
                } else if ($scope.PersonaJuridica.Nit == null || $scope.PersonaJuridica.Nit == "") {
                    alertify.success("El campo Nit no puede estar vacio");
                    return false;


                }else  if ($scope.PersonaJuridica.SectorEconomico == null || $scope.PersonaJuridica.SectorEconomico == ""  ) {
                    alertify.success("El campo SectorEconomico no puede estar vacio");
                    return false;
                }else  if ($scope.PersonaJuridica.Responsable == null || $scope.PersonaJuridica.Responsable == ""  ) {
                    alertify.success("El campo Responsable no puede estar vacio");
                    return false;
                
             
                } else if ($scope.PersonaJuridica.Email == null || $scope.PersonaJuridica.Email == "") {
                    alertify.success("El campo Email no puede estar vacio o debe tener una direccion correcta");
                    return false;

                }else  if ($scope.PersonaJuridica.Usuario == null || $scope.PersonaJuridica.Usuario == ""  ) {
                    alertify.success("El campo Usuario no puede estar vacio");
                    return false;
                }else  if ($scope.PersonaJuridica.Contrasena == null || $scope.PersonaJuridica.Contrasena == ""  ) {
                    alertify.success("El campo contraseña no puede estar vacio");
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
                    alertify.success("Necesita ingresar el campo de Usuario");
                    return false;

                } else if ($scope.Usuario.Contrasena == null || $scope.Usuario.Contrasena == "") {
                    alertify.success("Necesita ingresar el campo de contraseña");
                    return false;
                } else {
                    LoginService.ConsultarUsuario($scope.Usuario, function (response) {
                        if (response.usuario != null) {

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
                          
                        } else {
                            alertify.success("El usuario o la contraseña es incorrecta");
                        }
                        
                    });
                }
            }



            $scope.ConsultarCorreo = function () {

                if ($scope.recuperarContrasena.email == "" || $scope.recuperarContrasena.email ==  null) {
                    alertify.success("Debe Ingresar el correo!");
                } else {
                    LoginService.ConsutarEmail($scope.recuperarContrasena.email, function (response) {
                        if (response.success) {
                            alertify.success(response.Mensaje);
                        }
                    })

                    $('#ModalOlvideContra').modal('hide');
                }

            }


        }]);