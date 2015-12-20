/**
 * Created by tremaine on 12/15/15.
 */
(function(){
  angular.module('app.directives',[])
         .directive('owner', owner)
         .directive('partner', partner)
         .directive('company', company)
         .directive('fileModel', fileModel)

         function fileModel($parse){
            var directive = {
              restrict: 'A',
              link: link
            };

            return directive;

            function link(scope, element, attrs){
               var model = $parse(attrs.fileModel),
                   modelSetter = model.assign;

                  element.bind('change', function(){
                     scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                     });
                  });
            }
         }


         function owner(){
            var directive = {
              require: 'ngModel',
              link: link
            };

            return directive;

            function link(scope, element, attrs, model){

              var options = {
                  types: ['address'],
                  componentRestrictions: {country: 'us'}
              };

              scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

              google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                  var place = scope.gPlace.getPlace();
                  var address = place.formatted_address;
                  model.$setViewValue(element.val());
                  var address_split = address.split(", ");
                  scope.owner.ow_home_address = address_split[0];
                  scope.owner.ow_city = address_split[1];
                  var state_city = address_split[2].split(" ");
                  scope.owner.ow_state = state_city[0];
                  scope.owner.ow_zip = state_city[1];
                });
              });
            }
         }//end of owner

         function company(){
            var directive = {
              require: 'ngModel',
              link: link
            };

            return directive;

            function link(scope, element, attrs, model){

              var options = {
                  types: ['address'],
                  componentRestrictions: {country: 'us'}
              };

              scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

              google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                  var place = scope.gPlace.getPlace();
                  var address = place.formatted_address;
                  model.$setViewValue(element.val());
                  var address_split = address.split(", ");
                  scope.company.co_address = address_split[0];
                  scope.company.co_city = address_split[1];
                  var state_city = address_split[2].split(" ");
                  scope.company.co_state = state_city[0];
                  scope.company.co_zip = state_city[1];
                });
              });
            }
         }//end of owner

         function partner(){
            var directive = {
              require: 'ngModel',
              link: link
            };

            return directive;

            function link(scope, element, attrs, model){

              var options = {
                  types: ['address'],
                  componentRestrictions: {country: 'us'}
              };

              scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

              google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                  var place = scope.gPlace.getPlace();
                  var address = place.formatted_address;
                  model.$setViewValue(element.val());
                  var address_split = address.split(", ");
                  scope.company.pa_home_address = address_split[0];
                  scope.company.pa_city = address_split[1];
                  var state_city = address_split[2].split(" ");
                  scope.company.pa_state = state_city[0];
                  scope.company.pa_zip = state_city[1];
                });
              });
            }
         }//end of owner
})();
