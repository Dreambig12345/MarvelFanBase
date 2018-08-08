var myModuleConfig = function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider.state("home", {
        url: "/",
        templateUrl: "/views/home.html"
    }).state("viewCities", {
        url: "/view-cities/",
        templateUrl: "/views/view-cities.html",
        controller: "viewCitiesController"
    }).state("admin", {
        url: "/admin/",
        templateUrl: "/views/admin/index.html"
    }).state("admin.cities", {
        url: "cities/",
        templateUrl: "/views/admin/cities/index.html",
        controller: "adminCitiesListController"
    }).state("admin.cities.add", {
        url: "add/",
        templateUrl: "/views/admin/cities/add.html",
        controller: "adminCitiesAddController"
    }).state("admin.cities.edit", {
        url: "edit/:cityCode",
        templateUrl: "/views/admin/cities/edit.html",
        controller: "adminCitiesEditController"
    });
};
myModuleConfig.$inject = ["$stateProvider", "$urlRouterProvider"];