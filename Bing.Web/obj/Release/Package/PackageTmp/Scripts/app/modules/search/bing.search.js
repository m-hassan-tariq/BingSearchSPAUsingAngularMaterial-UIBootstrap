(function () {
    'use strict';

    angular
        .module('bing.search', [
            'bing.search.services',
            'bing.search.controllers'
        ])
        .config(config);

    function config($stateProvider) {
        
    }

})();
