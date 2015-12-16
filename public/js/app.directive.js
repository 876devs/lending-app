/**
 * Created by tremaine on 12/15/15.
 */
(function(){
  angular.module('app.directives',[])
        .directive('googleplace', function() {
        return {
          require: 'ngModel',
          link: function(scope, element, attrs, model) {
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
        };
      });
})();
