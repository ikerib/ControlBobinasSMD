/**
 * Created by ikerib on 23/06/14.
 */
var app = angular.module('controlbobinasApp', ['ngRoute', 'ui.bootstrap','ngGrid']);

app.config(function ($routeProvider) {
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
