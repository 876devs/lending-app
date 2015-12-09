/**
 * Created by tremaine on 12/8/15.
 */
angular.module('ownerModule',[])
  .controller('OwnerController', ['$scope', 'GoToService',
    function($scope,GoToService){

  $scope.next = function(path){
    GoToService.goTo(path);
  }
      $scope.step = 1;
      $scope.percent = 25;
}]);
