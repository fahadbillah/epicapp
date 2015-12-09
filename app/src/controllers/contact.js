'use strict';
define([
	'angular'
	],function(angular) {
		angular.module('EpicApp.contact', [])
		.controller('ContactCtrl', ['$scope', function ($scope) {
			$scope.message = 'Contact us';
		}])
	});
