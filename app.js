var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope) {
    $scope.texto = "hi from eneisoft!";
});

myApp.directive('zippy', function() {
  return {
      restrict: 'AE',
      scope: {text: '@'},
      templateUrl: 'zippyTemplate.html',
      link: function(scope) {
          scope.zippyClosed = true;
          scope.toggleZippy = function() {
              scope.zippyClosed = !scope.zippyClosed;
          }
      }
  }
});