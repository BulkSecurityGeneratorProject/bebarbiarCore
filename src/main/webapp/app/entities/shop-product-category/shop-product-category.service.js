(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ShopProductCategory', ShopProductCategory);

    ShopProductCategory.$inject = ['$resource'];

    function ShopProductCategory ($resource) {
        var resourceUrl =  'api/shop-product-categories/:id';

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
