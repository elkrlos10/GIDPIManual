ManualApp.factory('PerfilProyectoService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        service.ConsultarProyecto = function (IdProyecto, callback) {

            item = {
                Parametro1: IdProyecto
            };

            $http.post(URLServices + "PerfilProyecto/ConsultarProyecto/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.GuardarPerfilProyecto = function (PerfilProyecto, callback) {


            $http.post(URLServices + "PerfilProyecto/GuardarPerfilProyecto/", PerfilProyecto)
            .success(function (response) {
                callback(response);
            });
        };
        service.ConsultarPerfilTerminado = function (IdProyecto, callback) {

            item = {
                Parametro1 :IdProyecto
            }
            $http.post(URLServices + "PerfilProyecto/ConsultarPerfilTerminado/", item)
            .success(function (response) {
                callback(response);
            });
        };
        service.EditarPerfilProyecto = function (PerfilProyecto, callback) {


            $http.post(URLServices + "PerfilProyecto/EditarPerfilProyecto/", PerfilProyecto)
            .success(function (response) {
                callback(response);
            });
        };

        service.GuardarPerfilProyecto2 = function (PerfilProyecto2, callback) {


            $http.post(URLServices + "PerfilProyecto/GuardarPerfilProyecto2/", PerfilProyecto2)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarPerfil2 = function (IdProyecto, callback) {

            item = {
                Parametro1: IdProyecto
            }

            $http.post(URLServices + "PerfilProyecto/ConsultarPerfil2/", item)
            .success(function (response) {
                callback(response);
            });
        };

        return service;
    }])