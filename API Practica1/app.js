var express = require("express"),
	app = express(),
	http = require("http"),
	server = http.createServer(app),
	mongoose = require('mongoose');

app.configure(function () {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
});

app.get('/', function (req, res) {
	res.send("Hola que tal");
});

routes = require('./routes/estaciones')(app);
routes2 = require('./routes/lecturas')(app);

mongoose.connect('mongodb://localhost/practica1', function (err, res) {
	if (err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Conectados a la Base de Datos');
	}
});

server.listen(3000, function () {
	console.log("Servidor corriendo en: http://localhost:3000");
});