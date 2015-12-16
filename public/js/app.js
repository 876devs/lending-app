(function(){
  angular.module('app',[
    'ngRoute',
    'ngMessages',
    'ownerModule',
    'companyModule',
    'app.directives',
    'app.services'
  ]).config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
    
    $routeProvider
      .when('/', {templateUrl: 'partials/owner', controller: 'OwnerController'})
      .when('/company', {templateUrl: 'partials/company', controller: 'CompanyController'})
      .otherwise('/', {templateUrl: 'partials/owner', controller: 'OwnerController'});
    
    // $locationProvider.html5Mode(true);
  }]);
})();

//(function(){
//  angular
//    .module('app', ['ngRoute', 'ngResource'])
//    .config(config);
//
//  function config($routeProvider) {
//    $routeProvider
//      .when('/owner', {
//        templateUrl: 'js/owner.html',
//        controller: 'OwnerController',
//        controllerAs: 'vm'
//      });
//  }
//})();


