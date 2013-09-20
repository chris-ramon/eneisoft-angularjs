var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope) {
});

myApp.directive('zippy', function($parse) {
  return {
      restrict: 'AE',
      transclude: true,
      scope: {text: '='},
      templateUrl: 'zippyTemplate.html',
      link: function(scope, elm, attrs) {
          scope.zippyClosed = true;
          scope.toggleZippy = function() {
              scope.zippyClosed = !scope.zippyClosed;
          }
          scope.$watch(attrs.text, function(newVal, oldVal) {
              console.log('Nuevo valor:');
              console.log(newVal);
              console.log('Antiguo valor:');
              console.log(oldVal);
          });
          scope.writeWithParse = function() {
            $parse(attrs.text).assign(scope, 'escribiendo con $PARSE');
          }
      }
  }
});
