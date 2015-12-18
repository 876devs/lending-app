(function(){
	var app = angular.module('app.factories',[]);

	app.factory('persistApplication', function($window){
		return {
			setObject: function(key, value) {
      			$window.localStorage[key] = JSON.stringify(value);
    		},
		    getObject: function(key) {
		      return JSON.parse($window.localStorage[key] || '{}');
		    },
		    reset: function(){
		    	$window.localStorage.clear();
		    }
		}
	});
})();