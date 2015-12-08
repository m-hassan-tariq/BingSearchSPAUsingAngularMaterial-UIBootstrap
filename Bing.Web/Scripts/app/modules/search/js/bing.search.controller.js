(function () {
    'use strict';

    angular
        .module('bing.search.controllers', [])
        .controller('SearchController', searchController);

    searchController.$inject = ['searchService', '$mdToast'];

    function searchController(searchService, $mdToast) {
        var vm = this;

        init();

        function init() {

            vm.searchText = searchService.getSearchInfo() ? searchService.getSearchInfo().Title : '';
            vm.selectedText = searchService.getSelectedText() ? searchService.getSelectedText().Title : '';
            vm.showSearchResult = showSearchResult;
            vm.searchResult = searchResult;
            vm.showNewsSearchResult = showNewsSearchResult;
            vm.showWebSearchResult = showWebSearchResult;
            vm.showImageSearchResult = showImageSearchResult;
            vm.showCompositeSearchResult = showCompositeSearchResult;
            vm.webResult = [];
            vm.webtotalItems = 0;
            vm.imagestotalItems = 0;
            vm.newstotalItems = 0;
            vm.currentPage = 1;
            vm.itemsPerPage = 10;
            vm.spinnerMode = "";
            vm.showLoader = false;

        }

        ////////////////////////////Implementation//////////////////////////////////////

        function showSearchResult(text) {
            if (text) {
                searchResult(true);
            }
        }

        function searchResult(tabClick) {

            var text = vm.selectedText = searchService.getSelectedText() ? searchService.getSelectedText().Title : '';
            if (!text)
            {
                $mdToast.show($mdToast.simple().content('Please enter keyword to search'));
                return;
            }

            setLoader(true);
            if (tabClick) vm.currentPage = 1;
            switch (vm.selectedIndex) {
                case 0: vm.showCompositeSearchResult(text); break;
                case 1: vm.showWebSearchResult(text); break;
                case 2: vm.showNewsSearchResult(text); break;
                case 3: vm.showImageSearchResult(text); break;
            }
        }

        function setLoader(mode) {
            mode === true ? (vm.showLoader = true, vm.spinnerMode = "indeterminate") : (vm.showLoader = false, vm.spinnerMode = null);
        }

        function showImageSearchResult(text) {
            searchService.getImageSearchGridData(text, vm.currentPage * vm.itemsPerPage).then(function (data) {
                setLoader(false);
                return vm.webResult = data;
            });
        }

        function showWebSearchResult(text) {
            searchService.getWebSearchGridData(text, vm.currentPage * vm.itemsPerPage).then(function (data) {
                setLoader(false);
                return vm.webResult = data;
            });
        }

        function showNewsSearchResult(text) {
            searchService.getNewsSearchGridData(text, vm.currentPage * vm.itemsPerPage).then(function (data) {
                setLoader(false);
                return vm.webResult = data;
            });
        }

        function showCompositeSearchResult(text) {
            searchService.getCompositeSearchGridData(text, vm.currentPage * vm.itemsPerPage).then(function (data) {
                setLoader(false);
                return data ? (vm.webResult = data,
                                vm.webtotalItems = data[0].WebTotal,
                                vm.imagestotalItems = data[0].ImageTotal,
                                vm.newstotalItems = data[0].NewsTotal) : vm.webResult = null;
            });
        }

    };
})();
