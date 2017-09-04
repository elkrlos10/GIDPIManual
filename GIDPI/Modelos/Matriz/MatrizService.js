ManualApp.factory('MatrizService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        service.Guardar = function (Matriz, callback) {

            $http.post(URLServices + "DetalleMatriz/Guardar/", Matriz)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarMatriz = function (IdProyecto, callback) {
            item = {
                Parametro1:IdProyecto
            }

            $http.post(URLServices + "DetalleMatriz/ConsultarMatriz/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.OmitirMatriz = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }

            $http.post(URLServices + "DetalleMatriz/OmitirMatriz/", item)
            .success(function (response) {
                callback(response);
            });
        };

        return service;

    }]);