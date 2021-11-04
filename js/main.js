const myApp = angular.module("cssUnits", [], ($interpolateProvider) => {
  $interpolateProvider.startSymbol("[[");
  $interpolateProvider.endSymbol("]]");
});

myApp.controller("controls", [
  "$scope",
  function ($scope) {
    $scope.unit = 1;
    $scope.bodySize = 16;
    $scope.htmlSize = 16;
    $scope.fontrelative = true;
    $scope.viewportpercentage = true;
    $scope.absolute = true;
  },
]);

$(document).ready(() => {
  $("[data-toggle=popover]").popover({
    placement: "bottom",
    trigger: "hover",
  });
});
