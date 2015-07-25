(function () {
    function HomeService($http) {
        this.getHomeText = function() {
            return "hola";
        }
    }

    angular
        .module('skeleton-app.HomeModule')
        .service('HomeService', ['$http', HomeService]);
})();