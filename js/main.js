var myApp = angular.module('cssUnits', [], function ($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

myApp.controller('controls', ['$scope', function($scope) {
  $scope.unit = 2;
  $scope.bodySize = 16;
  $scope.htmlSize = 16;
  $scope.fontrelative = true;
  $scope.viewportpercentage = true;
  $scope.absolute = true;
}]);

$( document ).ready(function() {
  $("[data-toggle=popover]").popover({
    placement : 'bottom',
    trigger: 'hover'
  });
});
