var adminCitiesAddController = function($scope, citiesService, $state){
    $scope.city = new citiesService();

    $scope.save = function(){
        $scope.city.$save(function(){
            $state.go("admin.cities", {}, {reload: true});
        });
    };
};
adminCitiesAddController.$inject = ["$scope", "citiesService", "$state"];
