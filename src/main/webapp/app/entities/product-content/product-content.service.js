(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ProductContent', ProductContent);

    ProductContent.$inject = ['$resource'];

    function ProductContent ($resource) {
        var resourceUrl =  'api/product-contents/:id';

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
