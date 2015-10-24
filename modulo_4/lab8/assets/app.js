angular.module('lab8', ['ngRoute', 'lab8.controllers', 'lab8.services'])
.config(function($routeProvider){

    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: 'views/contact.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});