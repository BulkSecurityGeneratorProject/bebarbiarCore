(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ShopContentSearch', ShopContentSearch);

    ShopContentSearch.$inject = ['$resource'];

    function ShopContentSearch($resource) {
        var resourceUrl =  'api/_search/shop-contents/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
