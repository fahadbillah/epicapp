define(['angular','ngRoute'], function(angular, ngRoute) {
	var epicApp = angular.module('EpicApp', [
	                             'angular',
	                             'ngRoute'
	                             ])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'HomeCtrl'
		})
		.when('/contact', {
			templateUrl: 'contact.html',
			controller: 'ContactCtrl'
		})
		.when('/error/:errorId', {
			templateUrl: 'error.html',
			controller: 'ErrorCtrl'
		});
	}]);

	return epicApp;
});