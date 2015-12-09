'use strict';
define([
	'angular'
	],function(angular) {
		angular.module('EpicApp.home', [])
		.controller('HomeCtrl', ['$scope', function ($scope) {
			$scope.message = 'Hello World';
		}])
	});
