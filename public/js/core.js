angular.module('myApp', ['todoController', 'todoService', 'ngRoute'])
    .config(['$routeProvider','$http', function ($routeProvider,$http) {
        
        $routeProvider
            .when("/", {
                controller: 'mainController',
                templateUrl: 'view/tasks.html',
                controllerAs: 'vm'
            })
            .when("/setting", {
                controller: 'mainController',
                templateUrl: 'view/taskctrl.html',
                controllerAs: 'vm'
            })
            .when("/green", {
                templateUrl: "green.htm"
            })
            .when("/blue", {
                templateUrl: "blue.htm"
            });
    }]);
    
