(function (angular) {
    'use strict';
    var http = angular.module('movie.http', []);
    http.service('HttpService', ['$window', '$document', function ($window, $document) {
        this.jsonp = function (url, data, callback) {
            var cbFuncName = 'jsonp_fun' + Math.random().toString().replace('.', '');

            var queryString = url.indexOf('?') == -1 ? '?' : '&';
            for (var key in data) {
                queryString += key + '=' + data[key] + '&';
            }
            queryString += 'callback=' + cbFuncName;
            var script = document.createElement('script');
            script.src = url + queryString;

            $window[cbFuncName] = function (data) {
                callback(data);
                $document[0].body.removeChild(script);
            };
            $document[0].body.appendChild(script);
        }
    }]);
})(angular);