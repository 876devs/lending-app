(function(){
	angular
		.module('documentModule',[])
		.controller('DocumentController', DocumentController);

	DocumentController.$inject = ['$scope', 'fileUploadService', 'persistApplication'];

	function DocumentController($scope, fileUploadService, persistApplication){
		console.log(persistApplication.getObject('company'));
		console.log(persistApplication.getObject('owner'));
		$scope.step = 3;
      	$scope.percent  = 75;

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
      	}
	}
})();