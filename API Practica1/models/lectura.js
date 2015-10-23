var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;

var EstacionesLectoras = new Schema({
    idIndividuo: { type: String },
    idLector: { type: String },
    fechaHora: {type: String},
    latitud: { type: String },
    longitud: { type: String }
});

module.exports = mongoose.model('Lecturas', EstacionesLectoras);