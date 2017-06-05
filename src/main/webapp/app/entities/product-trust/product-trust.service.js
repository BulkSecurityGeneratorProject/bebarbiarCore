(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ProductTrust', ProductTrust);

    ProductTrust.$inject = ['$resource'];

    function ProductTrust ($resource) {
        var resourceUrl =  'api/product-trusts/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
