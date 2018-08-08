var adminCitiesEditController = function($scope, citiesService, $state, $stateParams, $http){
    $scope.city = citiesService.get({id: $stateParams.cityCode});
    $scope.edits = [];

    $http.get("/api/cities/history/revisions/" + $stateParams.cityCode)
        .success(function(data){
            $scope.edits = data;
        });

    $scope.update = function(){
        $scope.city.$update(function(){
            $state.go("admin.cities", {}, {reload: true});
        });
    };
};
adminCitiesEditController.$inject = ["$scope", "citiesService", "$state", "$stateParams", "$http"];