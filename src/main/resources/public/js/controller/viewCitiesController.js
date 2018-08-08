var viewCitiesController = function($scope, citiesService){
    $scope.cities = citiesService.query();
    $scope.filterText = "";
};
viewCitiesController.$inject = ["$scope", "citiesService"];