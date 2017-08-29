ManualApp.factory('InvolucradosService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        service.GuardarInvolucrados = function (Involucrados,callback) {
            $http.post(URLServices + "Involucrados/GuardarInvolucrados/", Involucrados)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarInvolucrados = function (IdProyecto, callback) {
            item = {
                Parametro1:IdProyecto
            }
            $http.post(URLServices + "Involucrados/ConsultarInvolucrados/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.AbrirProyecto = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "Menu/AbrirProyecto/", item)
            .success(function (response) {
                callback(response);
            });
        };

        return service;

    }]);