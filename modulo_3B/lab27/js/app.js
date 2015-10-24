angular.module('initial_spi', ['ngRoute', 'initial_spi.controllers'])

.config(['$routeProvider', function($routeProvider){
	/*
	 * `when()` cuantas veces sea necesario
	 * `otherwise()` una sola vez "OJO"
	*/
	$routeProvider

	.when('/prod_box', {
	    templateUrl : "views/prod_box.html",
	    controller: 'boxController'
	})

	.when('/prod_paper', {
		templateUrl: "views/prod_paper.html",
		controller: 'paperController'
	})
	
	.when('/prod_pencil', {
	    templateUrl : "views/prod_pencil.html",
	    controller: 'pencilController'
	})

	.when('/prod_tape', {
		templateUrl: "viewsprod_tape.html",
		controller: 'tapeController'
	})
	
	.otherwise({
	    redirectTo: '/',
	    templateUrl: 'otherwise.html'
	});
 }]);
 