ManualApp.factory('ArbolProblemaService',
    ['$http', '$rootScope', '$routeParams',
    function ($http, $rootScope, $routeParams) {

        var service = {};

        //service.SubirArchivo = function (data, callback) {
        //    //waitingDialog.show();
        //    var ajaxRequest = $.ajax({
        //        type: "POST",
        //        url: URLServices + "ArbolProblema/UploadFileArea",
        //        contentType: false,
        //        processData: false,
        //        data: data
        //    }).done(function (responseData, textStatus) {
        //        callback(responseData);
        //        waitingDialog.hide();
        //    }).fail(function () {
        //        waitingDialog.hide();
        //    });
        //};
        service.SubirArchivo = function (img, callback) {

            item = {
                Parametro1: img
            }
            $http.post(URLServices + "ArbolProblema/UploadFileArea/", item)
            .success(function (response) {
                callback(response);
            });
        };


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