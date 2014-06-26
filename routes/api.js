/**
 * Created by ikerib on 26/06/14.
 */

var monk = require('monk');
var db = monk('localhost:27017/controlbobinas');
var collection = db.get('planificacion');

exports.getarticulo = function(req, res){

    var of = req.params.of;

//    collection.find({}, function(err, bugs){
//        if (err) res.json(500, err);
//        else res.json(bugs);
//    });

    var resp = {
        'Articulo': '3CI00112233'
    };

    res.json(resp);


};