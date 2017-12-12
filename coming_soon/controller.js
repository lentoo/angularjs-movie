(function(angular){
    'use strict';
    var module = angular.module('movie.coming_soon',['ngRoute','movie.http']);
    module.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/coming_soon',{
            controller: 'comingSoonController',
            templateUrl: '/coming_soon/view.html'
        });
    }]);
    module.controller('comingSoonController',['$scope','HttpService',function($scope,HttpService){
        HttpService.jsonp('http://api.douban.com/v2/movie/coming_soon',{
            count:10,
            start:0
        },function(data){
            $scope.data=data;
            $scope.$apply();
        });
    }]);
})(angular);