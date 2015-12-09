/**
 * Created by tremaine on 12/8/15.
 */
(function(){
  angular.module('app.services',[])
    .service('GoToService', function($location){
        this.goTo = function(path){
          $location.path(path);
      };
    });
})();
