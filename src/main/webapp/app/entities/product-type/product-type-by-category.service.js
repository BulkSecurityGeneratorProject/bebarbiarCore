(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ProductTypeByCategory', ProductTypeByCategory);

    ProductTypeByCategory.$inject = ['$resource'];

    function ProductTypeByCategory ($resource) {
        var resourceUrl =  'api/product-types-by-category/:id';

        return $resource(resourceUrl, {}, {
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            }

        });
    }
})();
