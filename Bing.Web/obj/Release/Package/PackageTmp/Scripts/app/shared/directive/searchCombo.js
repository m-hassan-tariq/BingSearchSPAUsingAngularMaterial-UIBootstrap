(function() {
    'use strict';

    angular
        .module('bing')
        .directive('searchCombo', searchCombo);

    function searchCombo() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'scripts/app/shared/directive/template/searchCombo.html',
            scope: {
                searchtext: '=',
                showsearchresult: '&'
            },
            controller: autoCompleteController,
            controllerAs: 'vm',
            bindToController: true,
            transclude: true
        };

        return directive;
    }

    autoCompleteController.$inject = ['homeService', '$mdToast'];

    function autoCompleteController(homeService, $mdToast) {

        var vm = this;

        init();

        /////////////////////Implementation///////////////////////////////

        function init() {
            vm.searchResult = new Array();
            vm.selectedItem = null;
            vm.searchText = vm.searchtext;
            vm.search = search;
            vm.showSearchResult = showSearchResult;
            vm.showManualSearchResult = showManualSearchResult;

        }

        function search() {
            if (vm.searchText) {
                homeService.getRelatedSearch(vm.searchText).then(function (data) {
                    return vm.searchResult = data;
                });
            }
                
        }

        function showSearchResult() {
            if (!isValid(vm.selectedItem))
                return;
            homeService.setSelectedText(vm.selectedItem);
            vm.showsearchresult()(vm.selectedItem);
        };

        function showManualSearchResult() {
            if (!isValid(vm.searchText))
                return;
            homeService.setSelectedText({ 'Title': vm.searchText });
            vm.showsearchresult()(vm.searchText);
        };

        function isValid(text) {
            if (!text) {
                $mdToast.show($mdToast.simple().content('Please enter keyword to search'));
                return false;
            } else
                return true;
        }
    }

})();
