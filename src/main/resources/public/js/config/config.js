angular.module("myFirstAngularModule", ["ui.router", "ngResource"])
    .config(myModuleConfig)
    .factory("citiesService", citiesService)
    .controller("viewCitiesController", viewCitiesController)
    .controller("adminCitiesListController", adminCitiesListController)
    .controller("adminCitiesAddController", adminCitiesAddController)
    .controller("adminCitiesEditController", adminCitiesEditController);

