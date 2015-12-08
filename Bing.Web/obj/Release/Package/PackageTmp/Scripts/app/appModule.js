(function () {
    'use strict';

    angular
        .module('bing', [
            'bing.Core',
            'bing.Module'
        ]);

    // Injected Dependency list of All Core 3rd Party Libraries
    angular
        .module('bing.Core', [
            'ui.router',
            'ngMaterial',
            'ui.bootstrap',
            'oc.lazyLoad',
            'angularMoment',
            'ngAnimate'
        ]);

    // Injected Dependency list of All Modules
    angular
        .module('bing.Module', [
            'bing.layout',
            'bing.home'
        ]);

})();
