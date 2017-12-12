(function (angular) {
    'use strict';
    var module = angular.module('movie.in_theaters', ['ngRoute', 'movie.http']);
    module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/in_theaters', {
            controller: 'inTheatersController',
            templateUrl: '/in_theaters/view.html'
        });
    }]);
    module.controller('inTheatersController', ['$scope', 'HttpService', function ($scope, HttpService) {
        console.log(HttpService);
        HttpService.jsonp('http://api.douban.com/v2/movie/in_theaters', {
            count: 10,
            start: 0
        }, function (data) {
            $scope.data = data;
            $scope.$apply();
            console.log(data);
        });
    }]);
})(angular);