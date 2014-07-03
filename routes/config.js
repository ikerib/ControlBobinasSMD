/**
 * Created by ikerib on 26/06/14.
 */

var monk = require('monk');
var db = monk('localhost:27017/controlbobinas');
var collection = db.get('config');
//var mongo = require('mongo');

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
    var body = req.body;
    delete body._id;
    collection.findAndModify({_id: id}, {$set: body}, {multi:false}, function(err, bug){
        if (err) res.json(500, err);
        else if (bug) res.json(bug);
        else res.json(404);
    });

}

exports.productosdel = function(req, res) {

    var id = req.params.id;
    collection.remove({_id: id}, function(err){
        if (err) res.json(500, err);
        else res.json(204);
    });

}
