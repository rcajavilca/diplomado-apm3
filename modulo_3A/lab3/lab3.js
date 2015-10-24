
/* objetos y funciones */
var my_object = new Object();

var new_object = new Object();

var other_object = {};

var my_object = {
	firstName: 'Alejandro', 
	lastName: 'Romero',
	phone: 1137373
};

new_object = {
	firstName: 'Nombre',
	lastName: 'Apellido',
	phone: 555555
};

console.log(my_object.firstName);

console.log(my_object['lastName']);

console.log(new_object.firstName);

console.log(new_object['lastName']);


other_object = ['Apellido', 'Nombre']

console.log(other_array);

var key;

for(key in my_object){
	console.log(my_object[key]);
}

for(key in new_object){
	console.log(new_object[key]);
}

// Funciones

function test(){
	console.log('ejecutando una funcion');
}

test();

// usando funcion anonima

var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
}

bye_bye();
bye_bye();