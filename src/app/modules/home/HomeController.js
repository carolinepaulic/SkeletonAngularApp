(function () {
    function HomeController($scope, HomeService) {
        $scope.hi = HomeService.getHomeText();
    }

    angular
        .module('skeleton-app.HomeModule')
        .controller('HomeController', ['$scope', 'HomeService', HomeController]);
})();
