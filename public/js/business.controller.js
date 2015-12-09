/**
 * Created by tremaine on 12/8/15.
 */
angular.module('businessModule',[])
      .controller('BusinessController',
        ['$scope','GoToService', function($scope, GoToService){

    $scope.next = function(path){
      GoToService.goTo(path);
    };
    $scope.step = 2;$scope.percent = 50;
}]);
