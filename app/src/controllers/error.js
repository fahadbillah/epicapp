'use strict';
define([
	'angular'
	],function(angular) {
		angular.module('EpicApp.error', [])
		.controller('ErrorCtrl', ['$scope','$routeParams', function ($scope,$routeParams) {
			$scope.errorId = $routeParams.errorId;
			$scope.message = 'Error';
		}])
	});
