ManualApp.factory('AdminService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};



        service.cosultarGrafica = function (callback) {
            $http.post(URLServices + "Admin/cosultarGrafica/")
            .success(function (response) {
                callback(response);
            });
        };


        return service;

    }]);