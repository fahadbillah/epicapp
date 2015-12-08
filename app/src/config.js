require.config({
	baseUrl: 'app/src/',
	paths: {
		angular: '../../../bower_components/angular/angular',
		ngRoute: '../../../bower_components/angular-route/angular-route',
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'ngRoute': {
			deps: 'angular',
			exports: 'ngRoute'
		},
	},
	priority: ["angular"],
	deps: ['../../src/app']
});

require(['angular'], function(angular) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);
	angular.element().ready(function() {
		angular.bootstrap(document, ['EpicApp']);
	});
});