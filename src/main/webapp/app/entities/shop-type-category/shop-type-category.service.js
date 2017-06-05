(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ShopTypeCategory', ShopTypeCategory);

    ShopTypeCategory.$inject = ['$resource'];

    function ShopTypeCategory ($resource) {
        var resourceUrl =  'api/shop-type-categories/:id';

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
