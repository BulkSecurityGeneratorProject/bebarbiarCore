(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ShopContent', ShopContent);

    ShopContent.$inject = ['$resource'];

    function ShopContent ($resource) {
        var resourceUrl =  'api/shop-contents/:id';

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
