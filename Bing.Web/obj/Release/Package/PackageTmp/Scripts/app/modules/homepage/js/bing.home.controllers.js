(function () {
    'use strict';

    angular
        .module('bing.home.controllers', [])
        .controller('HomeController', homeController);

    homeController.$inject = ['homeService', '$state'];

    function homeController(homeService, $state) {
        var vm = this;

        init();

        function init() {
            vm.myInterval = 3000;
            vm.showSearchResult = showSearchResult;
            vm.slides = setSlides();

        }

        ////////////////////////////Implementation//////////////////////////////////////

        function showSearchResult(text) {
            if (text) {
                homeService.setSearchInfo(text);
                $state.go('search');
            }
        }

        function setSlides()
        {
            var lst = new Array();
            for (var i = 0; i < 11; i++) {
                lst.push({ image: '/Images/bing' + i + '.jpg' });
            }
            return lst;
        }

    };

})();
