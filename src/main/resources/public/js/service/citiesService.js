var citiesService = function($resource){
    return $resource("/api/cities/:id", {
        id: "@cityCode"
    }, {
        update: {
            method: "PUT"
        }
    });
};
citiesService.$inject = ["$resource"];