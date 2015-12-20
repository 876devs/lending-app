/**
 * Created by tremaine on 12/15/15.
 */
(function(){
  angular
    .module('ownerModule',[])
    .controller('OwnerController', OwnerController);

    OwnerController.$inject = ['dateService', 'nextPageService', '$scope', 'persistApplicantService'];

    function OwnerController(dateService, nextPageService, $scope, persistApplicantService){
        persistApplicantService.reset();
        $scope.months = dateService.getMonths();
        $scope.days = dateService.getDays();
        $scope.years = dateService.getYears();
        $scope.owner = {};
        $scope.owner.ow_month = $scope.months[0];
        $scope.owner.ow_day = $scope.days[0];
        $scope.owner.ow_year = $scope.years[0];
        $scope.step = 1;
        $scope.percent  = 25;

        $scope.next = function(path){
          persistApplicantService.setObject('owner', $scope.owner);
          nextPageService.nextPage(path);
        };
    }
})();
