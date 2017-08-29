/// <reference path="Login/Login.js" />
/// <reference path="Login/LoginService.js" />
// script.js


// create the module and name it scotchApp
var ManualApp = angular.module('ManualApp', ['ngRoute', 'ngCookies']);



// configure our routes
ManualApp.config(function ($routeProvider) {
    $routeProvider

    // route for the home page

          .when('/InfoBasica', {
              templateUrl: 'Views/DatosProyecto.html',
              controller: 'DatosProyectoController'
          })

            .when('/Matriz', {
                templateUrl: 'Views/MatrizView.html',
                controller: 'MatrizController'
            })

            .when('/Menu', {
                templateUrl: 'Views/menuPricinpal.html',
                controller: 'MenuController'
            })


             .when('/ArbolProblema', {
                 templateUrl: 'Views/ArbolView.html',
                 controller: 'ArbolProblemaController'
             })

             .when('/Login', {
                 templateUrl: 'Views/login.html',
                 controller: 'LoginController'
             })


             .when('/Objetivos', {
                 templateUrl: 'Views/ObjetivosView.html',
                 controller: 'ArbolObjetivosController'
             })
         
            .when('/Involucrados', {
                templateUrl: 'Views/involucrados.html',
                controller: 'InvolucradosController'
            })

            .when('/PerfilProyecto', {
                templateUrl: 'Views/PerfilProyecto.html',
                controller: 'PerfilProyectoController'
            })

            .when('/CronogramaPresupuesto', {
                templateUrl: 'Views/cronogramaPresupuesto.html',
                controller: 'MenuController'
            })

            

        .when('/MarcoL', {
            templateUrl: 'Views/MarcoLogico.html',
            controller: 'MenuController'
        })


})
.run(['$rootScope', '$location', '$cookies', '$cookieStore', '$http', '$templateCache',
    function ($rootScope, $location, $cookies, $cookieStore, $http, $templateCache) {
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            $rootScope.globals = $cookieStore.get('username');
            $rootScope.proyecto = $cookieStore.get('datosProyecto');

            //Posición para las alertas
            alertify.set('notifier', 'position', 'top-right');

            if ($rootScope.globals != undefined) {

                if ($location.path() !== '/Login' && !$rootScope.globals) {

                } else {

                    //Para redireccionar de acuerdo al tipo de usuario
                    //if ($rootScope.globals.currentUser.tipousuario == 1) {
                    //    if ($location.paht() == "/ArbolProblema" || $location......) {
                    //        $location.url("/Menu");
                    //    }
                    //}
                    //$location.url("/Menu");
                }
            } else {
                $location.path("/Login");
            }

        });
    }]);


// create the controller and inject Angular's $scope
ManualApp.controller('PrincipalController',
    ['$scope', '$rootScope', '$http', '$location',
    function ($scope, $rootScope, $http, $location) {

        //$scope.CerrarSesion = function () {
        //    $cookies.remove("username");
        //    $location.url('/Login');
        //};

        //$scope.UsuarioCambiarPass = {
        //    Password: "",
        //    newPass: ""
        //};

        //$scope.AbrirModalCambiarPass = function () {
        //    $("#ModalCambiarPass").modal("show");
        //};

        //$scope.CambiarPass = function () {
        //    LoginService.CambiarPassword($scope.UsuarioCambiarPass, $rootScope.globals.currentUser.id, function (response) {
        //        if (response.success = true) {

        //            bootbox.dialog({
        //                title: "Información",
        //                message: "El cambio de contraseña se realizó con éxito",
        //                buttons: {
        //                    success: {
        //                        label: "Cerrar",
        //                        className: "btn-primary",
        //                    }
        //                }
        //            });
        //        }
        //    })
        //};
    }]);


