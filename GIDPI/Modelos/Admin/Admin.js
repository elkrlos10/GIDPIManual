ManualApp.controller('AdminController',
    ['$scope', '$rootScope', '$location', 'AdminService', '$cookies', '$routeParams', '$sce',
        function ($scope, $rootScope, $location, AdminService, $cookies, $routeParams, $sce) {


            AdminService.cosultarGrafica( function (response) {

                if (response.success == true) {

                    $scope.Usuarios = response.Datos[0];
                    $scope.PersonaNatural = response.Datos[1];
                    $scope.personaJuridica = response.Datos[2];
                    $scope.Proyectos = response.Datos[3];

                
                    google.charts.load("current", { packages: ["corechart"] });
                    google.charts.setOnLoadCallback(drawChart);
                    function drawChart() {
                        var data = google.visualization.arrayToDataTable([
                          ['Task', 'Hours per Day'],
                          ['INNOVACIÓN', response.Datos[4]],
                          ['SERVICIOS TECNOLÓGICOS', response.Datos[5]],
                          ['INVESTIGACIÓN', response.Datos[6]],
                          ['OTRO', response.Datos[7]]

                        ]);

                        var options = {

                            pieHole: 0.4,
                            backgroundColor: '',
                            legend: 'none',
                            pieSliceText: 'label',
                            is3D: true,
                            slices: {
                                0: { color: '#088A08' },
                                1: { offset: 0.1, color:'#238276' },
                                2: { offset: 0.2, color: '#04B45F' },
                                3: { offset: 0.1, color: '#DF7401' },
                               
                            },
                        };

                        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
                        chart.draw(data, options);
                    }



                    google.charts.load("current", { packages: ["corechart"] });
                    google.charts.setOnLoadCallback(drawChart1);
                    function drawChart1() {
                        var data = google.visualization.arrayToDataTable([
                          ['Task', 'Hours per Day'],
                          ['FINALIZADOS', response.Datos[8]],
                          ['EN DESARROLLO', response.Datos[9]]

                        ]);

                        var options = {

                            pieHole: 0.4,
                            backgroundColor: '',
                            legend: 'none',
                            pieSliceText: 'label',
                            is3D: true,
                            slices: {
                                0: { color: '#088A08' },
                                1: { offset: 0.2, color: '#238276' },
                             

                            },
                        };

                        var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
                        chart.draw(data, options);
                    }

                    var SinMatriz = response.Datos[3] - response.Datos[10];
                    google.charts.load("current", { packages: ["corechart"] });
                    google.charts.setOnLoadCallback(drawChart2);
                    function drawChart2() {
                        var data = google.visualization.arrayToDataTable([
                          ['Task', 'Hours per Day'],
                          ['Total matrices de vester', response.Datos[10]],
                          ['Proyectos sin matriz de vester', SinMatriz]

                        ]);

                        var options = {

                            pieHole: 0.4,
                            backgroundColor: '',
                            legend: 'none',
                            pieSliceText: 'label',
                            is3D: true,
                            slices: {
                                0: { color: '#DF7401' },
                                1: { offset: 0.1, color: '#238276' },
                              

                            },
                        };

                        var chart = new google.visualization.PieChart(document.getElementById('Matriz'));
                        chart.draw(data, options);
                    }

                }
            });

            


        }]);