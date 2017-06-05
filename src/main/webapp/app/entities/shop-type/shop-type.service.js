(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ShopType', ShopType);

    ShopType.$inject = ['$resource'];

    function ShopType ($resource) {
        var resourceUrl =  'api/shop-types/:id';

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
