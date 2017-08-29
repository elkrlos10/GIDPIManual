ManualApp.factory('MenuService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};
        
        service.ConsultarProyectos = function (IdUsuario, callback) {
            item = {
                Parametro1:IdUsuario
            }
            $http.post(URLServices + "Menu/ConsultarProyectos/", item)
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