module.exports = function (app) {
    var estacion = require('../models/lectura.js');
    //GET todos las lecturas
    
    findAllLecturas = function (req, res) {
        estacion.find(function (err, estaciones) {
            if (err) res.send(500, err.message);
            
            console.log('GET /lecturas');
            res.status(200).send(estaciones);
        });
    };
    
    //POST insertamos lecturas
    
    addLectura = function (req, res) {
        console.log('POST');
        console.log(req.body);
        
        var esta = new estacion({
            idIndividuo: req.body.idIndividuo,
            idLector: req.body.idLector,
            fechaHora: req.body.fechaHora,
            latitud: req.body.latitud,
            longitud: req.body.longitud
        });
        
        esta.save(function (err, estacion) {
            if (err) return res.send(500, err.message);
            
            res.status(200).send();
        });
    };
    
    
    //PUT actualizamos una lectura
    
    updateLectura = function (req, res) {
        console.log('PUT');
        console.log(req.body);
        estacion.find({ idIndividuo : req.params.id }, function (err, est) {
            est[0].idLector = req.body.idLector
            est[0].latitud = req.body.latitud;
            est[0].longitud = req.body.longitud;
            est[0].fechaHora = req.body.fechaHora;
            est[0].save(function (err) {
                if (err) return res.status(500).send(err.message);
                res.status(200).send();
            });
        });
    };
    
    //DELETE borramos una lectura
    deleteLectura = function (req, res) {
        estacion.find({ idIndividuo : req.params.id }).remove().exec();
        res.status(200).send();
    };
    
    //Link routes and functions
    app.get('/lecturas', findAllLecturas);
    app.post('/lecturas', addLectura);
    app.put('/lecturas/:id', updateLectura);
    app.delete('/lecturas/:id', deleteLectura);
}