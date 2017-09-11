ManualApp.factory('CronogramaPresupuestoService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        service.GuardarCronograma = function (Cronograma, callback) {
            $http.post(URLServices + "CronogramaPresupuesto/GuardarCronograma/", Cronograma)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarCronograma = function (IdProyecto, callback) {

            item =
            {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "CronogramaPresupuesto/ConsultarCronograma/", item)
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



        service.GuardarPresupuesto = function (Presupuesto, callback) {
            $http.post(URLServices + "CronogramaPresupuesto/GuardarPresupuesto/", Presupuesto)
            .success(function (response) {
                callback(response);
            });
        };

        service.GuardarAIU = function (AIU, callback) {
            $http.post(URLServices + "CronogramaPresupuesto/GuardarAIU/", AIU)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarAIU = function (IdProyecto, callback) {
            item =
          {
              Parametro1: IdProyecto
          }
            $http.post(URLServices + "CronogramaPresupuesto/ConsultarAIU/", item)
            .success(function (response) {
                callback(response);
            });
        };

        service.ConsultarPresupuesto = function (IdProyecto, callback) {

            item =
            {
                Parametro1: IdProyecto
            }
            $http.post(URLServices + "CronogramaPresupuesto/ConsultarPresupuesto/", item)
            .success(function (response) {
                callback(response);
            });
        };

        return service;

    }])