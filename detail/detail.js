(function (angular) {
    'use strict';
    var module = angular.module('movie.detail', ['ngRoute', 'movie.http']);
    module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/detail/:id', {
            controller: 'DetailController',
            templateUrl: '/detail/view.html'
        });
    }]);
    module.controller('DetailController', ['$scope', 'HttpService', '$routeParams', '$route','AppConfig', function ($scope, HttpService, $routeParams, $route,AppConfig) {
        var page = $routeParams.page;
        var count = 10;
        var start = (parseInt(page) - 1) * count;
        HttpService.jsonp( AppConfig.DetailApiAddress+ $routeParams.id, {}, function (res) {
            $scope.data = res;
            $scope.$apply();
        });
    }]);
})(angular);