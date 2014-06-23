/**
 * Created by ikerib on 23/06/14.
 */
var controlbobinasApp = angular.module('controlbobinasApp', ['ngRoute']);

controlbobinasApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/entrada.html',
            controller: 'entradaController'
        })

        // route for the about page
        .when('/salida', {
            templateUrl: 'pages/salida.html',
            controller: 'salidaController'
        })
});

controlbobinasApp.controller('entradaController', function ($scope, $http) {

});
controlbobinasApp.controller('salidaController', function ($scope, $http) {});

