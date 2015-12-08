(function () {
    'use strict';

    angular
        .module('bing.home.services', [])
        .factory('homeService', homeService);

    homeService.$inject = ['webApi', 'searchInfo'];

    function homeService(webApi, searchInfo) {
        var factory = {
            getRelatedSearch: getRelatedSearch,
            setSearchInfo: setSearchInfo,
            setSelectedText: setSelectedText,
            getSelectedText: getSelectedText
        };

        return factory;

        ////////////////////////////Implementation//////////////////////////////////////

        function getRelatedSearch(text) {
            return webApi.nonParameter('GET', 'api/BingApi', { mode: 'related' , query: text , skip: 0 });
        }

        function setSearchInfo(text) {
            return searchInfo.setSearchText(text);
        }

        function setSelectedText(text) {
            return searchInfo.setSelectedText(text);
        }

        function getSelectedText() {
            return searchInfo.getSelectedText();
        }

    };

})();
