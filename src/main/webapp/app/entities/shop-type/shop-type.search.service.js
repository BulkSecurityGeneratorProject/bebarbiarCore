(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ShopTypeSearch', ShopTypeSearch);

    ShopTypeSearch.$inject = ['$resource'];

    function ShopTypeSearch($resource) {
        var resourceUrl =  'api/_search/shop-types/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
