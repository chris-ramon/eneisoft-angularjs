var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope) {
    $scope.texto = "hi from eneisoft!";
    $scope.evento = function() {
      alert('cool function !!!');
    }
});

myApp.directive('zippy', function() {
  return {
      restrict: 'AE',
      transclude: true,
      scope: {text: '=', evento: '&'},
      templateUrl: 'zippyTemplate.html',
      link: function(scope) {
          scope.zippyClosed = true;
          scope.toggleZippy = function() {
              scope.zippyClosed = !scope.zippyClosed;
              scope.evento();
          }
      }
  }
});