(function(){
  angular.module('app',[
    'ngRoute',
    'ownerModule',
    'businessModule',
    'documentModule',
    'submitModule',
    'app.services'
  ]).config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
      .when('/owner', {templateUrl: 'partials/owner', controller: 'OwnerController'})
      .when('/business', {templateUrl: 'partials/business', controller: 'BusinessController'})
      .when('/document', {templateUrl: 'partials/document', controller: 'DocumentController'})
      .when('/submission', {templateUrl: 'partials/submission', controller: 'SubmissionController'})
      .otherwise('/owner', {templateUrl: 'partials/owner', controller: 'OwnerController'});

    //$locationProvider.html5Mode(true);
  }]);
})();

