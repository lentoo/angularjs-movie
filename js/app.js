(function (angular) {
    'use strict';
    var module = angular.module('movie', ['ngRoute','movie.detail','movie.list','movie.autoFocus','movie.http' ]);
    module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/in_theaters/1'
        });
    }])
    .constant('AppConfig',{
        PageSize:10,
        ListApiAddress:'http://api.douban.com/v2/movie/',
        DetailApiAddress:'http://api.douban.com/v2/movie/subject/'
    })
    .controller('SearchController',['$scope','$route',function($scope,$route){
        $scope.input = '';
        $scope.submit=function(){
            $route.updateParams({
                q:$scope.input,
                category:'search'
            });
        }
    }])
})(angular);