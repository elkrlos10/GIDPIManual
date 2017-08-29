ManualApp.factory('ArbolProblemaService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        service.ArbolProblemaProyecto = function (IdProyecto, callback) {

            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "ArbolProblema/ArbolProblemaProyecto/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.GuardarDatosArbol = function (DatosArbol, callback) {

            $http.post(URLServices + "ArbolProblema/GuardarDatosArbol/", DatosArbol)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarArbolFinal = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "ArbolProblema/ConsultarArbolFinal/", item)
            .success(function (response) {
                callback(response);
            });
        };


        return service;

    }]);