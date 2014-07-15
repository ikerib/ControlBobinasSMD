/**
 * Created by ikerib on 26/06/14.
 */

// app.controller('entradaController', function ($scope, $http) {
app.controller('entradaController', ['growlNotifications', '$scope', '$http', function(growlNotifications, $scope, $http) {
    

    $scope.registro = {
        of:''
    };
    
    $scope.mytabs = {
        static1: true,
        static2: false,
        static3: false,
        static4: false
    }

    $scope.checkof = function() {

        var art =$http({
            url: '/api/getarticulo/' + $scope.registro.of,
            method: "GET"

        }).success( function(data, status) {

            $scope.registro.created_at = new Date();
            $scope.registro.articulo = data.articulo;
            $scope.mytabs.static2 = true;            
           
        }).error(function(data, status, headers, config) {
            growlNotifications.add('No existe Articulo para esa Orden de Fabricación', 'danger');
        });

    };

}]);