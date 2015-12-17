(function(){
	var app = angular.module('app.services',['ngResource']);

	app.service('dateService', function(){
		this.getMonths = function(){
			return [{"name": "Month", "value": ""},
					{"name": "January", "value": "January"},
					{"name": "February", "value": "February"},
					{"name": "March", "value": "March"},
					{"name": "April", "value": "April"},
					{"name": "May", "value": "May"},
					{"name": "June", "value": "June"},
					{"name": "July", "value": "July"},
					{"name": "August", "value": "August"},
					{"name": "September", "value": "September"},
					{"name": "October", "value": "October"},
					{"name": "November", "value": "November"},
					{"name": "December", "value": "December"}];
		};
		this.getDays = function(){
			return [{"name": "Day", "value": ""},
					{"name": "01", "value": "01"},
					{"name": "02", "value": "02"},
					{"name": "03", "value": "03"},
					{"name": "04", "value": "04"},
					{"name": "05", "value": "05"},
					{"name": "06", "value": "06"},
					{"name": "07", "value": "07"},
					{"name": "08", "value": "08"},
					{"name": "09", "value": "09"},
					{"name": "10", "value": "10"},
					{"name": "11", "value": "11"},
					{"name": "12", "value": "12"},
					{"name": "13", "value": "13"},
					{"name": "14", "value": "14"},
					{"name": "15", "value": "15"},
					{"name": "16", "value": "16"},
					{"name": "17", "value": "17"},
					{"name": "18", "value": "18"},
					{"name": "19", "value": "19"},
					{"name": "20", "value": "20"},
					{"name": "21", "value": "21"},
					{"name": "22", "value": "22"},
					{"name": "23", "value": "23"},
					{"name": "24", "value": "24"},
					{"name": "25", "value": "25"},
					{"name": "26", "value": "26"},
					{"name": "27", "value": "27"},
					{"name": "28", "value": "28"},
					{"name": "29", "value": "29"},
					{"name": "30", "value": "30"},
					{"name": "31", "value": "31"}]
		};

		this.getYears = function(){
			var i = 1960, end = 1990, years = [{"name": "Year", "value": ""}];
			for(;i <=end; i++){
				years.push({"name": i, "value": i});
			}
			return years;
		};

	});
	
	app.service('nextPageService', function($location){
		this.nextPage = function(path){
			$location.path('/' + path);
		};
	});

	app.service('entityTypeService', function(){
		this.getTypes = function(){
			return [ {"name": "Entity", "value": ""},
					{"name": "LLC", "value": 'LLC'},
					{"name": "Corporation", "value": 'Corporation'},
					{"name": "Partnership", "value": 'Partnership'},
					{"name": "Sole Proprietor", "value": 'Sole Proprietor'},
					{"name": "LLP", "value": 'LLP'}];
		}
	});

	app.service('fileUploadService', ['$http', function($http){
		this.upload = function(file, url){
			var formData = new FormData(),
				isUploaded = false;

			formData.append('file', file);

			return $http.post(url, formData, {
				transformRequest: angular.indentity,
				headers: {'Content-Type': undefined}
			}).success(function(){
				
			}).error(function(){
				
			});
		 //return isUploaded;
		}	
	}]);
})();