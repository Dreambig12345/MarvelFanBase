var adminCitiesListController = function($scope, citiesService, $state){
    $scope.cities = citiesService.query();

    $scope.delete = function(city){
      if(confirm(city.name + " şehrini silmek istediğinize emin misiniz?")) {
          city.$delete(function(){
              $state.reload();
          });
      }
    };
};
adminCitiesListController.$inject = ["$scope", "citiesService", "$state"];