/**
 * Created by ikerib on 26/06/14.
 */

var monk = require('monk');
var db = monk('localhost:27017/controlbobinas');

var c_aux_productos = db.get('aux_productos');
var c_sqlserver = db.get('sqlserver');


exports.getarticulo = function(req, res){

    // Bar kodean oferta irakurtzen dugu, eta horrekin Articulua atera behar dugu
    var of = req.params.of;

    c_sqlserver.find({ of: of }, function (err, item){
        if (err) {
            res.json(500, err);
        } else {
            if (item.length === 0) {
                res.statusCode = 404;
                return res.send({ error: 'No encontrado' });
            } else {
                // Begiratzen dugu laugarren caracterra
                // 0 baldin bada = Top/Bottom da
                // T baldin bada = Top da
                // horietako bat ez bada, taula auxiliarran begiratu behar du

                var miarticulo = item[0].articulo;
                var lau = miarticulo.charAt(3);

                switch (lau) {
                    case "0":
                        var resp = {'articulo': item[0].articulo,'operacion': 'Top-Bottom'};
                        res.json(resp);
                        break;
                    case "T":
                        var resp = {'articulo': item[0].articulo,'operacion': 'Top'};
                        res.json(resp);
                        break;
                    default:
                        c_aux_productos.find({ articulo: item[0].articulo }, function (err, prod){
                            if (err) {
                                res.json(500, err);
                            } else {
                                if (prod.length > 0) {
                                    var resp = {'articulo': item[0].articulo, 'operacion': prod[0].operacion };
                                    res.json(resp);
                                } else {
                                    var resp = {};
                                    res.json(resp);
                                }

                            }
                        });
                }
            }
        }
    });
};