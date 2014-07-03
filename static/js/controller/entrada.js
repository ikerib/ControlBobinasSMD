/**
 * Created by ikerib on 26/06/14.
 */

app.controller('entradaController', function ($scope, $http) {
    $scope.registro = {
        of:''
    };
    $scope.mytabs = {
        static1: true,
        static2: false,
        static3: false,
        static4: false
    }

    $scope.radioModel = "bottom";

    $scope.myData = [
        { articulo: "3CI0474080BOTTOM", of: 'OF212045', Fecha: '22/02/2014 11:22', bobinaori: '11DL000016', descripcion: 'DL LED BLANCO', alimentador: 'F27', bobinades:'11DL000016', obs: ''},
        { articulo: "3CI0474080BOTTOM", of: 'OF212045', Fecha: '22/02/2014 12:22', bobinaori: '11DL000316', descripcion: 'DL LED BLANCO', alimentador: 'F27', bobinades:'11DL043534', obs: 'C1'},
        { articulo: "3CI0474080BOTTOM", of: 'OF212000', Fecha: '22/02/2014 13:22', bobinaori: '11DL000516', descripcion: 'DL LED BLANCO', alimentador: 'F27', bobinades:'11DL000533', obs: ''},
        { articulo: "3CI0474080BOTTOM", of: 'OF212000', Fecha: '22/02/2014 14:22', bobinaori: '11DL002016', descripcion: 'DL LED BLANCO', alimentador: 'F27', bobinades:'11DL002157', obs: ''},
        { articulo: "3CI0474080BOTTOM", of: 'OF212000', Fecha: '22/02/2014 15:22', bobinaori: '11DL000234', descripcion: 'DL LED BLANCO', alimentador: 'F27', bobinades:'11DL002562', obs: 'C1'},
        { articulo: "3CI0474080BOTTOM", of: 'OF212045', Fecha: '22/02/2014 18:22', bobinaori: '11DL000013', descripcion: 'DL LED BLANCO', alimentador: 'F27', bobinades:'11DL005256', obs: 'BIN:H1-2B=-N3-0-000F'},

    ];


    $scope.checkof = function() {


        var art =$http({
            url: '/api/getarticulo/' + $scope.registro.of,
            method: "GET"

        }).success( function(data, status) {
            $scope.registro.created_at = new Date();
            $scope.registro.articulo = data.Articulo;
            $scope.mytabs.static2 = true;

        }).error(function(data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
        });

    };

});