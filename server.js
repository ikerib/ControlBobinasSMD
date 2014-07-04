//setup Dependencies
var connect = require('connect')
    , express = require('express')
    , api = require('./routes/api')
    , config = require('./routes/config')
    , port = (process.env.PORT || 8082);

// New Code


process.env.NODE_ENV = process.env.NODE_ENV || 'development';


//Setup Express
var server = express.createServer();
server.configure(function(){
    server.set('views', __dirname + '/views');
    server.set('view options', { layout: false });
    server.use(connect.bodyParser());
    server.use(express.cookieParser());
    server.use(express.session({ secret: "lawuglahfñoq8yf-1b2l12bro8y!"}));
    server.use(connect.static(__dirname + '/static'));
    server.use(server.router);
});

//setup the errors
server.error(function(err, req, res, next){
    if (err instanceof NotFound) {
        res.render('404.jade', { locals: { 
                  title : '404 - Not Found'
                 ,description: ''
                 ,author: ''
                 ,analyticssiteid: 'XXXXXXX' 
                },status: 404 });
    } else {
        res.render('500.jade', { locals: { 
                  title : 'The Server Encountered an Error'
                 ,description: ''
                 ,author: ''
                 ,analyticssiteid: 'XXXXXXX'
                 ,error: err 
                },status: 500 });
    }
});
server.listen( port);



///////////////////////////////////////////
//              Routes                   //
///////////////////////////////////////////

/////// ADD ALL YOUR ROUTES HERE  /////////

server.get('/', function(req,res){
  res.render('index.jade', {
    locals : { 
      title : 'Control Bobinas SMD'
     ,description: 'Control Bobinas SMD'
     ,author: 'Iker Ibarguren'
     ,analyticssiteid: 'XXXXXXX'
    }
  });
});

server.get('/api/getarticulo/:of', api.getarticulo);

server.get      ('/config/productos',       config.findAll);
server.post     ('/config/productos',       config.productospost);
server.put      ('/config/productos/:id',   config.productosput);
server.delete   ('/config/productos/:id',   config.productosdel);

//A Route for Creating a 500 Error (Useful to keep around)
server.get('/500', function(req, res){
    throw new Error('This is a 500 Error');
});

//The 404 Route (ALWAYS Keep this as the last route)
server.get('/*', function(req, res){
    throw new NotFound;
});

function NotFound(msg){
    this.name = 'NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
}


console.log('Listening on http://0.0.0.0:' + port );
