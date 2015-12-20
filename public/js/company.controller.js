/**
 * Created by tremaine on 12/15/15.
 */
(function(){
  angular
    .module('companyModule',[])
    .controller('CompanyController', CompanyController);

    CompanyController.$inject = ['$scope', 'dateService', 'entityTypeService', 'nextPageService', 'persistApplicantService'];

    function CompanyController($scope, dateService, entityTypeService, nextPageService, persistApplicantService){
    	$scope.showPartner = false;
      $scope.company = {};

    	$scope.months = dateService.getMonths();
      $scope.days = dateService.getDays();
      $scope.years = dateService.getYears();


      $scope.types = entityTypeService.getTypes();
      $scope.company.co_month = $scope.months[0];
      $scope.company.co_day = $scope.days[0];
      $scope.company.co_year = $scope.years[0];
      $scope.company.pa_month = $scope.months[0];
      $scope.company.pa_day = $scope.days[0];
      $scope.company.pa_year = $scope.years[0];

      $scope.company.co_type = $scope.types[0];
    	$scope.step = 2;
      $scope.percent  = 50;

      $scope.next = function(path){
        persistApplicantService.setObject('company', $scope.company);
        nextPageService.nextPage(path);
      };

      $scope.selectedItemChanged = function(){
        if($scope.company.co_type.value === "Partnership"){
          $scope.showPartner = !$scope.showPartner;
        }else{
          //$scope.company.co_partner = {};
          $scope.showPartner = false;
        }
      };
    }
})();
