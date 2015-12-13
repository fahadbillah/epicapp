require.config({
	baseUrl: 'src/',
	paths: {
		angular: '../../bower_components/angular/angular',
		angularRoute: '../../bower_components/angular-route/angular-route',
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angularRoute': {
			deps: ['angular'],
			exports: 'angularRoute'
		},
	},
	priority: ["angular","angularRoute"],
	deps: ['app']
});

require(['angular','app'], function(angular,app) {
	angular
	.element(document.getElementsByTagName('html')[0])
	.ready(function() {
		angular.bootstrap(document, ['EpicApp']);
	});
});