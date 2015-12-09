/**
 * Created by tremaine on 12/8/15.
 */
angular.module('submitModule',[])
  .controller('SubmissionController',
  ['$scope','GoToService', function($scope, GoToService){

    $scope.next = function(path){
      GoToService.goTo(path);
    }
    $scope.step = 4; $scope.percent = 100;
  }]);
