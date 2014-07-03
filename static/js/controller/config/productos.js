/**
 * Created by ikerib on 26/06/14.
 */

app.controller('productosController', ['growlNotifications', '$scope', '$http', function(growlNotifications, $scope, $http) {

    $scope.myData = [];
    $scope.updateok=false;
    $scope.operaciones = [
        { nombre:'Top'  },
        { nombre:'Bottom'  },
        { nombre:'Top-Bottom' }
        ];

    $http.get('config/productos').success(function(data) {
        $scope.myData = data;
    });


    $scope.gridOptions = {
        data: 'myData',
        enableRowSelection: false,
        enableCellEditOnFocus: true,
        multiSelect: false,
        columnDefs: [
            { field: 'articulo', displayName: 'Articulo', enableCellEdit: true },
            { field: 'operacion', displayName: 'Operacion', enableCellEdit: true,
                editableCellTemplate: '<select ng-model="myForm.operacion" name="operacion" ng-options="ope.nombre for ope in operaciones"></select>'
             },
            { field: '', displayName: 'Guardar', enableCellEdit: false,
                cellTemplate: '<button class="btn btn-primary btn-sm" id="editBtn" type="button"  ng-click="saveItem(row.entity._id, row.entity.articulo, row.entity.operacion)" >Guardar</button>'
            },

            { field: '', displayName: 'Eliminar', enableCellEdit: false,
                cellTemplate: '<button class="btn btn-danger btn-sm" id="editBtn" type="button"  ng-click="removeRow(row.entity._id, row.entity.articulo, row.entity.operacion)" >Eliminar</button>'
            }
        ]
    };

    $scope.addRow = function () {
        $scope.hidden = true;
    };

    $scope.insertRow = function () {
        
       // Persist on database
        $http.post('/config/productos', {
            articulo: $scope.myForm.articulo,
            operacion: $scope.myForm.operacion
        }).
        success(function (data) {
            growlNotifications.add('Insertado con éxito', 'success');
        
            $scope.myData.push({
                articulo: $scope.myForm.articulo,
                operacion: $scope.myForm.operacion.nombre
            });
            $scope.hidden = false;
        }).error(function(data, status, headers, config) {
            growlNotifications.add('Ha habido un problema a la hora de eliminar: No ha sido posible conectarse con el servidor','danger');
        });
    };


    $scope.saveItem = function (id, articulo, operacion) {
        $http.put('/config/productos/' + id, {
            articulo: articulo,
            operacion: operacion
        }).
        success(function (data) {
            growlNotifications.add('Actualizado con éxito','success');
        }).error(function(data, status, headers, config) {
            growlNotifications.add('Ha habido un problema a la hora de eliminar: No ha sido posible conectarse con el servidor','danger');
        });
    }

    $scope.removeRow = function (id, name, surname) {;
        // Delete from Grid
        var index = this.row.rowIndex;
               
        // Server side
        $http.delete('/config/productos/' + id).
        success(function (data) {
            $scope.gridOptions.selectItem(index, false);
            $scope.myData.splice(index, 1);
            growlNotifications.add('Eliminado con éxito','success');
        }).error(function(data, status, headers, config) {
            growlNotifications.add('Ha habido un problema a la hora de eliminar: No ha sido posible conectarse con el servidor','danger');
        });
    };

}]);

