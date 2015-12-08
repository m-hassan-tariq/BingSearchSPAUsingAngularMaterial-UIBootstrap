(function () {
    'use strict';

    angular
        .module('bing.search.services', [])
        .factory('searchService', searchService);

    searchService.$inject = ['webApi', 'searchInfo'];

    function searchService(webApi, searchInfo) {

        var factory = {
            getSearchInfo: getSearchInfo,
            getSelectedText: getSelectedText,
            getWebSearchGridData: getWebSearchGridData,
            getNewsSearchGridData: getNewsSearchGridData,
            getImageSearchGridData: getImageSearchGridData,
            getCompositeSearchGridData: getCompositeSearchGridData
        };

        return factory;

        ////////////////////////////Implementation//////////////////////////////////////

        function getSearchInfo() {
            return searchInfo.getSearchText();
        }

        function getSelectedText() {
            return searchInfo.getSelectedText();
        }

        function getWebSearchGridData(text, val) {
            return webApi.nonParameter('GET', 'api/BingApi', { mode: 'web', query: text, skip: val });
        }

        function getNewsSearchGridData(text, val) {
            return webApi.nonParameter('GET', 'api/BingApi', { mode: 'news', query: text, skip: val });
        }

        function getImageSearchGridData(text, val) {
            return webApi.nonParameter('GET', 'api/BingApi', { mode: 'image', query: text, skip: val });
        } 

        function getCompositeSearchGridData(text, val) {
            return webApi.nonParameter('GET', 'api/BingApi', { mode: 'composite', query: text, skip: val });
        }

    };

})();
