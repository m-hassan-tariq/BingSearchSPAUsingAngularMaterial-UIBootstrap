(function () {
    'use strict';

    angular
        .module('bing')
        .factory('searchInfo', searchInfo);

    function searchInfo() {

        var obj = {};

        var service = {
            setSearchText: setSearchText,
            getSearchText: getSearchText,
            setSelectedText: setSelectedText,
            getSelectedText: getSelectedText
        };

        return service;

        ////////////////////////////Implementation//////////////////////////////////////

        function setSearchText(data) {
            obj.SearchText = data;
        }

        function getSearchText() {
            return obj.SearchText;
        }

        function setSelectedText(data) {
            obj.SelectedText = data;
        }

        function getSelectedText() {
            return obj.SelectedText;
        }

    }

})();