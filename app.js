var myApp = angular.module('myApp', []);

myApp.directive('miDirectiva', function() {
  return {
      restrict: 'AE',
      template: '<h1>Esto es una directiva y también un componente.</h1>'
  }
});