//se getiona todas las rutas de la aplicación
var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.render('index', {'title' : 'Lab8'});
});

router.get('/contact', function(req, res){
	res.render('contact', {'title' : 'Lab8'});
});

module.exports = router;
