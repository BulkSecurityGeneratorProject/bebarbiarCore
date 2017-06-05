(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ProductTypeCategory', ProductTypeCategory);

    ProductTypeCategory.$inject = ['$resource'];

    function ProductTypeCategory ($resource) {
        var resourceUrl =  'api/product-type-categories/:id';

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
