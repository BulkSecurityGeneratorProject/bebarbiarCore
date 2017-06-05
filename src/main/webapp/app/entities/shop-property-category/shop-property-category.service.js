(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ShopPropertyCategory', ShopPropertyCategory);

    ShopPropertyCategory.$inject = ['$resource'];

    function ShopPropertyCategory ($resource) {
        var resourceUrl =  'api/shop-property-categories/:id';

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
