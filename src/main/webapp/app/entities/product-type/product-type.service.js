(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ProductType', ProductType);

    ProductType.$inject = ['$resource'];

    function ProductType ($resource) {
        var resourceUrl =  'api/product-types/:id';

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
