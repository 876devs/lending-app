(function(){
	angular
		.module('documentModule',[])
		.controller('DocumentController', DocumentController);

	DocumentController.$inject = ['$scope', 'fileUploadService', 'persistApplicantService', 'submitApplicationFactory'];

	function DocumentController($scope, fileUploadService, persistApplicantService, submitApplicationFactory){
		$scope.step = 3;
    $scope.percent  = 75;
    var application = {"company": persistApplicantService.getObject('company') || {},
                       "owner" : persistApplicantService.getObject('owner') || {}
                      };
    console.log(application);
    submitApplicationFactory.create( application, function(){
        console.log('Complete');
    }, function(error){
      console.error('Error');
    });

    $scope.upload = function(){
      var file = $scope.file;
      if(file){
        //upload file
        console.log('File present');
      }
      // var promise = fileUploadService.upload(file, '/upload');
      // promise.success(function(){
      // 	console.info('Success');
      // }).error(function(){
      // 	console.error('Error');
      // })

      /**
       * Send application details to endpoint
       */
      console.log(persistApplicantService.getObject('company'));
      console.log(persistApplicantService.getObject('owner'));
    }
	}
})();
