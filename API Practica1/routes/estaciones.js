module.exports = function (app) {
	var estacion = require('../models/estacion.js');
	//GET todos las estaciones
	
	findAllEstaciones = function (req, res) {
		estacion.find(function (err, estaciones) {
			if (err) res.send(500, err.message);
			
			console.log('GET /estaciones');
			res.status(200).send(estaciones);
		});
	};
	
	//POST insertamos estaciones
	
	addEstacion = function (req, res) {
		console.log('POST');
		console.log(req.body);
		
		var esta = new estacion({
			idEstacion: req.body.idEstacion,
			latitud: req.body.latitud,
			longitud: req.body.longitud
		});
		
		esta.save(function (err, estacion) {
			if (err) return res.send(500, err.message);
			
            res.status(200).send();
		});
	};
	
	
	//PUT actualizamos una estacion
	
    updateEstacion = function (req, res) {
        console.log('PUT');
        console.log(req.body);
		estacion.find({ idEstacion : req.params.id }, function (err, est) {
            est[0].latitud = req.body.latitud;
			est[0].longitud = req.body.longitud;
            
            est[0].save(function (err) {
                if (err) return res.status(500).send(err.message);
                res.status(200).send();
            });
		});
	};
	
	//DELETE borramos una estacion
    deleteEstacion = function (req, res) {
        console.log('DELETE');
        console.log(req.params.id)
        estacion.find({ idEstacion : req.params.id }).remove().exec();
        res.status(200).send();
	};
	
	//Link routes and functions
	app.get('/estaciones', findAllEstaciones);
	app.post('/estaciones', addEstacion);
	app.put('/estaciones/:id', updateEstacion);
	app.delete('/estaciones/:id', deleteEstacion);
}