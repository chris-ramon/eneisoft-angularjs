var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope,
                                          productFactory) {
    $scope.products = productFactory.getProducts();
});

myApp.factory('productFactory', function() {
    var factory = {};
    factory.getProducts = function() {
        return [
            {id:1, name: 'First Product'},
            {id:2, name: 'Second Product'},
            {id:3, name: 'Third Product'}
        ]
    }
    return factory;
});