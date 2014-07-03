/**
 * Created by ikerib on 26/06/14.
 */

var monk = require('monk');
var db = monk('localhost:27017/controlbobinas');
var collection = db.get('config');

exports.findAll = function(req, res) {

    collection.find({}, function(err, items){
        res.send(items);
    });
};

exports.productospost = function(req, res){

    var producto = {
        articulo: req.body.articulo,
        operacion: req.body.operacion.nombre
    }

    collection.insert(producto, {safe:true}, function(err, result) {
        if (err) {
            res.send({'error':'Akatsa bat egonda'});
        } else {
            res.send(result);
        }
    });
};

exports.productosput = function(req, res){
    var id = req.params.id;

    var producto = {
        articulo: req.body.articulo,
        operacion: req.body.operacion.nombre
    }

    collection.update({'_id':new BSON.ObjectID(id)}, producto, {safe:true}, function(err, result) {
        if (err) {
            console.log('Error updating wine: ' + err);
            res.send({'error':'An error has occurred'});
        } else {
            console.log('' + result + ' document(s) updated');
            res.send(producto);
        }
    });

};
