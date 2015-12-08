// This will be shared service which will be consumed by all modules for executing CRUD operation,
// Request Type, URL, Parameter Object will be passed to this shared service, so it will make code more maintainable
// readble and scaleble. If we dont go through this method then we have to use $http.get() or $http.post method
// every where in services files of each module, content negotiation issues can be simply handled over here,
// If you want to append anything with each URL like 'Http:\\bing\' then instead of copy it on every service file
// just hardcode this thing in this file and append URL from thier respective services.
// We dont need to mention protocol and hostname now in every URL request.


(function () {

    'use strict';
    angular
        .module('bing')
        .factory("webApi", webApi);

    webApi.$inject = ['$http', '$templateCache', '$q', '$mdToast'];

    function webApi($http, $templateCache, $q, $mdToast) {

        var factory = {
            withParameter: withParameter,
            nonParameter: nonParameter
        };

        return factory;

        ////////////////////////////Implementation//////////////////////////////////////

        function withParameter(methodType, webApiUrl, parameterObject) {
            var deferred = $q.defer();
            $http({
                method: methodType,
                url: webApiUrl, //window.location.protocol + '//' + window.location.host + window.location.pathname +
                data: parameterObject,
                cache: $templateCache
            })
            .success(deferred.resolve)
            .error(deferred.reject);
            return deferred.promise;
        }

        function nonParameter(methodType, webApiUrl, parameterObject) {
            var deferred = $q.defer();
            $http({
                method: methodType,
                url: webApiUrl,
                cache: $templateCache,
                params: parameterObject
            })
            .success(deferred.resolve)
            .error(function () {
                $mdToast.show($mdToast.simple().content('Error, Please try again!'));
                deferred.reject;                
            });
            return deferred.promise;
        }
    };

})();
