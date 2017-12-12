(function(angular){
    angular.module('movie.autoFocus',[])
    .directive('autoFocus',['$location',function($location){
        return {
            restrict:'A',
            link:function($scope, iElm, iAttrs, controller){
                $scope.$watch('$location.path()',function(now){
                    var aLink = iElm.children().attr('href');
                    var type = aLink.replace(/#!(\/.+?)\/\d/,'$1');
                    $scope.$location=$location;
                    if((now+'').startsWith(type)){
                        iElm.parent().children().removeClass('active');
                        iElm.addClass('active');
                    }
                });

            }
        }
    }])
})(angular);