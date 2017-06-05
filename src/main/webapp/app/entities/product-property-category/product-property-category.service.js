(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ProductPropertyCategory', ProductPropertyCategory);

    ProductPropertyCategory.$inject = ['$resource'];

    function ProductPropertyCategory ($resource) {
        var resourceUrl =  'api/product-property-categories/:id';

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
