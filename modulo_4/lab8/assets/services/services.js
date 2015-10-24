angular.module('lab8.services', ['ngResource'])
.factory('contact', function($resource){

    'use strict';

    return $resource('http://127.0.0.1:3636/contact');
});