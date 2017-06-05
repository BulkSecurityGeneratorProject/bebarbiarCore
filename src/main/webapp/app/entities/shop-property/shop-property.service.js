(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ShopProperty', ShopProperty);

    ShopProperty.$inject = ['$resource'];

    function ShopProperty ($resource) {
        var resourceUrl =  'api/shop-properties/:id';

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
