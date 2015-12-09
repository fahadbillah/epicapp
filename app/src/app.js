define([
	'angular',
	'angularRoute',
	'controllers/home',
	'controllers/contact',
	'controllers/error',
	], function(angular, angularRoute, home) {
		return angular.module('EpicApp', [
			'ngRoute',
			'EpicApp.home',
			'EpicApp.contact',
			'EpicApp.error',
			])
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
			.otherwise({ redirectTo: '/error/404' })
		}])
	});