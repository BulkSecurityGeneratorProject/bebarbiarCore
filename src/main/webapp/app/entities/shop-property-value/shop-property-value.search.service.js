(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ShopPropertyValueSearch', ShopPropertyValueSearch);

    ShopPropertyValueSearch.$inject = ['$resource'];

    function ShopPropertyValueSearch($resource) {
        var resourceUrl =  'api/_search/shop-property-values/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
