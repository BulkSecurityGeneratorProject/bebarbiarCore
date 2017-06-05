(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ProductDiscount', ProductDiscount);

    ProductDiscount.$inject = ['$resource'];

    function ProductDiscount ($resource) {
        var resourceUrl =  'api/product-discounts/:id';

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
