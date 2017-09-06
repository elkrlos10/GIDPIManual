ManualApp.factory('MarcoLogicoService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};


        service.LLenarMarco = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "MarcoLogico/LLenarMarco/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.GuardarMarco = function (Marco, callback) {
          
            $http.post(URLServices + "MarcoLogico/GuardarMarco/", Marco)
            .success(function (response) {
                callback(response);
            });
        };



        service.ConsultarMarco = function (IdProyecto, callback) {
            item = {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "MarcoLogico/ConsultarMarco/", item)
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