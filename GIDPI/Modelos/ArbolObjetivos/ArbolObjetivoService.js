ManualApp.factory('ArbolObjetivoService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        service.ConsultarArbolFinal = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "ArbolProblema/ConsultarArbolFinal/", item)
            .success(function (response) {
                callback(response);
            });
        };



        service.GuardarDatosArbol = function (DatosArbol, callback) {

            $http.post(URLServices + "ArbolObjetivo/GuardarDatosArbol/", DatosArbol)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarArbolObjetivosFinal = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "ArbolObjetivo/ConsultarArbolObjetivosFinal/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.GuardarObjetivos = function (objetivos, callback) {

            $http.post(URLServices + "ArbolObjetivo/GuardarObjetivos/", objetivos)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarDatosObjetivos = function (IdProyecto,callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "ArbolObjetivo/ConsultarDatosObjetivos/", item)
            .success(function (response) {
                callback(response);
            });
        };
        //service.SubirArchivo = function (img, callback) {

        //    item = {
        //        Parametro1: img
        //    }
        //    $http.post(URLServices + "ArbolObjetivo/UploadFileArea/", item)
        //    .success(function (response) {
        //        callback(response);
        //    });
        //};
        return service;

    }]);