
var mongoose = require('mongoose'),  
	Schema = mongoose.Schema;

var EstacionesLectoras = new Schema({
	idEstacion: { type: String },
	latitud: { type: String },
	longitud: { type: String }
});

module.exports = mongoose.model('EstacionesLectoras', EstacionesLectoras);