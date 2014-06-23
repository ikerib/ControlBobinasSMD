/**
 * Created by ikerib on 23/06/14.
 */
var controlbobinasApp = angular.module('controlbobinasApp', ['ngRoute', 'ui.bootstrap','ngGrid']);

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
    
    $scope.tabs = [
        { title:'Dynamic Title 1', content:'Dynamic content 1' },
        { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
      ];
    
    $scope.radioModel = "bottom";

    $scope.myData = [
        { articulo: "3CI0474080BOTTOM", of: 'OF212045', Fecha: '22/02/2014 11:22', bobinaori: '11DL000016', descripcion: 'DL LED BLANCO', alimentador: 'F27', bobinades:'11DL000016', obs: ''},
        { articulo: "3CI0474080BOTTOM", of: 'OF212045', Fecha: '22/02/2014 12:22', bobinaori: '11DL000316', descripcion: 'DL LED BLANCO', alimentador: 'F27', bobinades:'11DL043534', obs: 'C1'},
        { articulo: "3CI0474080BOTTOM", of: 'OF212000', Fecha: '22/02/2014 13:22', bobinaori: '11DL000516', descripcion: 'DL LED BLANCO', alimentador: 'F27', bobinades:'11DL000533', obs: ''},
        { articulo: "3CI0474080BOTTOM", of: 'OF212000', Fecha: '22/02/2014 14:22', bobinaori: '11DL002016', descripcion: 'DL LED BLANCO', alimentador: 'F27', bobinades:'11DL002157', obs: ''},
        { articulo: "3CI0474080BOTTOM", of: 'OF212000', Fecha: '22/02/2014 15:22', bobinaori: '11DL000234', descripcion: 'DL LED BLANCO', alimentador: 'F27', bobinades:'11DL002562', obs: 'C1'},
        { articulo: "3CI0474080BOTTOM", of: 'OF212045', Fecha: '22/02/2014 18:22', bobinaori: '11DL000013', descripcion: 'DL LED BLANCO', alimentador: 'F27', bobinades:'11DL005256', obs: 'BIN:H1-2B=-N3-0-000F'},

    ];

    $scope.gridOptions = { 
        data: 'myData',
        columnDefs: [
            { field: 'articulo', displayName: 'Artículo' },
            { field: 'of', displayName: 'Orden' },
            { field: 'Fecha', displayName: 'Fecha' },
            { field: 'bobinaori', displayName: 'Bobina origen' },
            { field: 'descripcion', displayName: 'Descripción' },
            { field: 'alimentador', displayName: 'Alimentador' },
            { field: 'bobinades', displayName: 'Bobina destino' },
            { field: 'obs', displayName: 'Observaciones' }            
        ],
        showGroupPanel: true
    };

});
controlbobinasApp.controller('salidaController', function ($scope, $http) {});

