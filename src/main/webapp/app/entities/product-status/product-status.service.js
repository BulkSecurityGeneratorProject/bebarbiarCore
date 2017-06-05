(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ProductStatus', ProductStatus);

    ProductStatus.$inject = ['$resource'];

    function ProductStatus ($resource) {
        var resourceUrl =  'api/product-statuses/:id';

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
