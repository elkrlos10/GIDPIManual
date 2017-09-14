ManualApp.factory('LoginService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};


        service.RegistrarPersonaNatural = function (usuario, callback) {
            $http.post(URLServices + "Login/RegistrarPersonaNatural/", usuario)
            .success(function (response) {
                callback(response);
            });
        };

        service.RegistroPersonaJuridica = function (usuario, callback) {
            $http.post(URLServices + "Login/RegistroPersonaJuridica/", usuario)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarUsuario = function (usuario, callback) {
            $http.post(URLServices + "Login/ConsultarUsuario/", usuario)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsutarEmail = function (correo, callback) {
            item={
                Parametro1:correo
            }
            $http.post(URLServices + "Login/ConsutarEmail/", item)
            .success(function (response) {
                callback(response);
            });
        };

        return service;

    }]);