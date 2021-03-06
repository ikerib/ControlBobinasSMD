/**
 * Created by ikerib on 23/06/14.
 */

var app = angular.module('controlbobinasApp', ['ngRoute', 'ngGrid', 'growlNotifications', 'ngSanitize']);

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/entrada.html',
            controller: 'entradaController'
        })

        .when('/salida', {
            templateUrl: 'pages/salida.html',
            controller: 'salidaController'
        })
    
        .when('/procesos', {
            templateUrl: 'pages/procesos.html',
            controller: 'procesosController'
        })

        .when('/config/productos', {
            templateUrl: 'pages/config/productos.html',
            controller: 'productosController'
        })
});



app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});
app.directive('triggerFocusOn', function($timeout) {
    return {
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                $timeout(function() {
                    var otherElement = document.querySelector('#' + attrs.triggerFocusOn);

                    if (otherElement) {
                        otherElement.focus();
                    }
                    else {
                        console.log("Can't find element: " + attrs.triggerFocusOn);
                    }
                });
            });
        }
    };
});
