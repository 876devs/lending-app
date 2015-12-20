(function(){
	angular.module('app.factories',['ngResource'])
         .factory('submitApplicationFactory', submitApplicationFactory);

  submitApplicationFactory.$inject = ['$resource'];

  function submitApplicationFactory($resource){
      return $resource('/application', {}, {
            create: {method: 'POST'}
      });
  }
})();
