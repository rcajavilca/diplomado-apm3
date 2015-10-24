/* Uso de funciones, variables y estructuras de control */

var a, b, result, operations;


a = prompt('indique el primer valor');
b = prompt('indique el segundo valor');


operations = function(a, b){
	if(a > b){
	result = parseInt(a) + parseInt(b);	
	}
	else if (a < b) {
	result = parseInt(a) * parseInt(b);	
	}
	else {
		result = parseInt(a) / parseInt(b);	
	}
	alert('El resultado es: ' +result);
};

operations(a, b);
		