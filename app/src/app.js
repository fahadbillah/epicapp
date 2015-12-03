'use strict';
var EpicApp = angular.module('EpicApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'view/home.html',
		controller: 'HomeCtrl'
	})
	.when('/contact', {
		templateUrl: 'view/contact.html',
		controller: 'ContactCtrl'
	})
	.when('/error/:errorId', {
		templateUrl: 'view/error.html',
		controller: 'ErrorCtrl'
	})
	.otherwise({ redirectTo: '/error/404' });
}]);