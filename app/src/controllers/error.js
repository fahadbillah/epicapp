'use strict';
EpicApp
.controller('ErrorCtrl', ['$scope','$routeParams', function($scope,$routeParams) {
	$scope.errorId = $routeParams.errorId;
}]);
