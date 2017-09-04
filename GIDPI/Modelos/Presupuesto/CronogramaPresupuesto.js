ManualApp.controller('CronogramaPresupuestoController',
    ['$scope', '$rootScope', '$location', 'CronogramaPresupuestoService', '$cookies', '$cookieStore', 'MenuService', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, CronogramaPresupuestoService, $cookies, $cookieStore, MenuService, $routeParams, $sce) {

            $("#containerPresupuesto").hide();



            $scope.Cronograma = [{
                Actividad: "",
                FechaInicio: "",
                FechaFin:""
            }]


            $scope.Presupuesto=[{
                Item: "",
                Concepto: "",
                Descripcion: "",
                Unidad: "",
                Cantidad: "",
                ValorUnitario: "",
                ValorTotal:""

            }]
            
            
            $scope.MostrarCronograma = function () {
                $("#containerCronograma").show();
                $("#containerPresupuesto").hide();
            }


            $scope.MostrarPresupuesto = function () {
                $("#containerCronograma").hide();
                $("#containerPresupuesto").show();
                console.log("puta");
            }

            $scope.agregarCronograma = function (index) {

                //$("#FechaInicio0").remove();

                $scope.Cronograma.push({
                    Actividad: "",
                    FechaInicio: "",
                    FechaFin: ""
                })
            }


            var update = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

            function repetir() {

                $('.FI').datepicker({
                    language: 'es',
                    autoclose: true,
                    //daysOfWeekDisabled: [0]
                });

                $('.FE').datepicker({
                    language: 'es',
                    autoclose: true,
                    //daysOfWeekDisabled: [0]
                });
             

                update(repetir); //entra en la funcion repetir sin salir de la misma, asi crea un ciclo infinito
            }
            update(repetir);
           


            $scope.agregarPresupuesto = function () {
                $scope.Presupuesto.push({
                    Item: "",
                    Concepto: "",
                    Descripcion: "",
                    Unidad: "",
                    Cantidad: "",
                    ValorUnitario: "",
                    ValorTotal: ""
                })

            }

            $scope.guardarCronograma = function () {

            }
           



        }]);