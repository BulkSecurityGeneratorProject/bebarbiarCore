(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ShopPropertySearch', ShopPropertySearch);

    ShopPropertySearch.$inject = ['$resource'];

    function ShopPropertySearch($resource) {
        var resourceUrl =  'api/_search/shop-properties/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
