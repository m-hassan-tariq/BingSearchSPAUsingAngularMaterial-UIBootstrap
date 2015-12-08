(function () {
    'use strict';

    angular
        .module('bing')
        .config(config)
        .run(runBlock);

    runBlock.$inject = ['$state', 'amMoment'];

    function runBlock($state, amMoment) {
        amMoment.changeLocale('de');
        $state.go('home');
    };

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: '/Scripts/app/modules/homepage/views/bing.home.html'
            })
            .state('search', {
                url: '/search',
                controller: 'SearchController',
                controllerAs: 'vm',
                templateUrl: '/Scripts/app/modules/search/views/bing.search.html',
                resolve: {
                    search: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: 'bing.search',
                                files: ['/Scripts/app/modules/search/bing.search.js'],
                                cache: false
                            },
                            {
                                name: 'bing.search.controllers',
                                files: ['/Scripts/app/modules/search/js/bing.search.controller.js'],
                                cache: false
                            },
                            {
                                name: 'bing.search.services',
                                files: ['/Scripts/app/modules/search/js/bing.search.services.js'],
                                cache: false
                            }
                        ]);
                    }
                }
            });
    }

})();
