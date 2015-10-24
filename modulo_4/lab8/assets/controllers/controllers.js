angular.module('lab8.controllers', ['lab8.services'])
.controller('lab8Controller', function($scope, contact){
    'use strict';
    contact.query(function(contact){
       $scope.contact = contact;
    });
});
