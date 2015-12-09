/**
 * Created by tremaine on 12/8/15.
 */
angular.module('documentModule',[])
  .controller('DocumentController',[ '$scope', 'GoToService',
    function($scope, GoToService){

      $scope.next = function(path){
        GoToService.goTo(path);
      }
      $scope.step = 3;$scope.percent = 75;
}]);
