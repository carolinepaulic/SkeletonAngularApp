angular.module('skeleton-app.HomeModule', [])
    .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'modules/home/HomeView.html',
            controller: 'HomeController'
        });

    $urlRouterProvider.when('/', '/home');
});