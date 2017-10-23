ManualApp.factory('DatosProyectoService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        service.GuardarDatosProyecto = function (Proyecto, callback) {

            $http.post(URLServices + "DatosProyecto/GuardarDatosProyecto/", Proyecto)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarDepartamentos = function (callback) {
            $http.get(URLServices + "DatosProyecto/ConsultarDepartamentos/")
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarMunicipiosDepartamento = function (IdDepartamento, callback) {

            item = {
                Parametro1: IdDepartamento,
            };

            $http.post(URLServices + "DatosProyecto/ConsultarMunicipiosDepartamento/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarDepartamentoxMunicipio = function (IdMunicipio, callback) {

            item = {
                Parametro1: IdMunicipio,
            };

            $http.post(URLServices + "DatosProyecto/ConsultarDepartamentoxMunicipio/", item)
            .success(function (response) {
                callback(response);
            });
        };

      
        service.ModificarProyecto = function (Proyecto, callback) {

            $http.post(URLServices + "DatosProyecto/ModificarProyecto/", Proyecto)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarProyecto = function (IdProyecto, callback) {

            item = {
                Parametro1: IdProyecto,
            };

            $http.post(URLServices + "DatosProyecto/ConsultarProyecto/", item)
            .success(function (response) {
                callback(response);
            });
        };

        return service;

    }]);