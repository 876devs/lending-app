(function(){
  angular.module('app',[
    'ngRoute',
    'ngMessages',
    'ownerModule',
    'companyModule',
    'documentModule',
    'submitModule',
    'app.directives',
    'app.services',
    'app.factories'
  ]).config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){

    $routeProvider
      .when('/', {templateUrl: 'partials/owner', controller: 'OwnerController'})
      .when('/company', {templateUrl: 'partials/company', controller: 'CompanyController'})
      .when('/document', {templateUrl: 'partials/document', controller: 'DocumentController'})
      .when('/submit', {templateUrl: 'partials/submission', controller: 'SubmissionController'})
      .otherwise('/', {templateUrl: 'partials/owner', controller: 'OwnerController'});
  }]);
})();



