var myApp = angular.module('myApp', []);

myApp.directive('miDirectiva', function() {
  return {
      restrict: 'AE',
      template: '<p>Esto es una directiva y un componente.</p>'
  }
});