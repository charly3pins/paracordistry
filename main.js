// Creación del módulo
var paracordistry = angular.module('paracordistry', ['ngRoute']);

// Configuración de las rutas
paracordistry.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl	: 'pages/home.html',
            controller 	: 'mainController'
        })
        .when('/quien', {
            templateUrl : 'pages/quien.html',
            controller 	: 'quienController'
        })
        .when('/desvan', {
            templateUrl : 'pages/desvan.html',
            controller 	: 'desvanController'
        })
        .when('/tienda', {
            templateUrl : 'pages/tienda.html',
            controller 	: 'StoreController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// Controllers
paracordistry.controller('mainController', function($scope) {
    $scope.message = 'Hola, Mundo del Paracord!';
});

paracordistry.controller('quienController', function($scope) {
});

paracordistry.controller('desvanController', function($scope) {
});

paracordistry.controller('StoreController', [ '$scope','$http', function($scope, $http) {
    $scope.products = [];

    $http.get('products.json').success(function(data){
        $scope.products = data;
    });
}]);

paracordistry.controller('PanelController', function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
        return this.tab === checkTab;
    };

    this.setTab = function(activeTab) {
        this.tab = activeTab;
    };
});