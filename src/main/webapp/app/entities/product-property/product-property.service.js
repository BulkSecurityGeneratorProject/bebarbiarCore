(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ProductProperty', ProductProperty);

    ProductProperty.$inject = ['$resource'];

    function ProductProperty ($resource) {
        var resourceUrl =  'api/product-properties/:id';

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
