﻿1/// <reference path="Login/Login.js" />
/// <reference path="Login/LoginService.js" />
// script.js


// create the module and name it scotchApp
var ManualApp = angular.module('ManualApp', ['ngRoute', 'ngCookies', 'ejangular']);



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

            .when('/Cronograma', {
                templateUrl: 'Views/cronogramaPresupuesto.html',
                controller: 'CronogramaPresupuestoController'
            })

            

        .when('/MarcoL', {
            templateUrl: 'Views/MarcoLogico.html',
            controller: 'MarcoLogicoController'
        })

      .when('/Reporte', {
          templateUrl: 'Views/Reporte.html',
          controller: 'ReporteController'
      })
    .when('/Admin', {
        templateUrl: 'Views/AdminView.html',
        controller: 'AdminController'
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


// crear la directiva "format" para Formatear con punto de miles los inputs.

ManualApp.$inject = ['$scope'];

ManualApp.directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;


            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue)
            });


            ctrl.$parsers.unshift(function (viewValue) {
                var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
                elem.val($filter(attrs.format)(plainNumber));
                return plainNumber;
            });
        }
    };
}]);

//---------------------------------------------------------------------------

// create the controller and inject Angular's $scope
ManualApp.controller('PrincipalController',
    ['$scope', '$rootScope', '$http', '$location', '$cookies', '$cookieStore',
    function ($scope, $rootScope, $http, $location, $cookies, $cookieStore) {

        $rootScope.cerrarSesion = function () {
            $cookies.remove("datosProyecto");
            $cookies.remove("username");
            $rootScope.nombreProyecto = "";
            $location.url("/Login");
        }

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


