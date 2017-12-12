(function (angular) {
    'use strict';
    var module = angular.module('movie.list', ['ngRoute', 'movie.http']);
    module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:category/:page', {
            controller: 'ListController',
            templateUrl: '/movielist/view.html'
        });
    }]);
    module.controller('ListController', ['$scope', 'HttpService', '$routeParams', '$route','AppConfig', function ($scope, HttpService, $routeParams, $route,AppConfig) {
        var page = $routeParams.page;
        var count = AppConfig.PageSize;
        var start = (parseInt(page) - 1) * count;
        $scope.loding = true;
        HttpService.jsonp( AppConfig.ListApiAddress+ $routeParams.category, {
            count: count,
            start: start,
            q: $routeParams.q
        }, function (data) {
            $scope.data = data;

            $scope.currentPage = parseInt(page);
            // console.log($scope.currentPage);
            // console.log(data);
            $scope.count = Math.ceil(data.total / count);
            $scope.go = function (ipage) {
                ipage = ipage <= 1 ? 1 : ipage;
                ipage = ipage > $scope.count ? $scope.count : ipage;

                //   $scope.currentPage=ipage;
                $route.updateParams({
                    page: ipage
                });
            }
            $scope.loding = false;
            $scope.$apply();

        });
    }]);
})(angular);