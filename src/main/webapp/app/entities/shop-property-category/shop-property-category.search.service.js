(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ShopPropertyCategorySearch', ShopPropertyCategorySearch);

    ShopPropertyCategorySearch.$inject = ['$resource'];

    function ShopPropertyCategorySearch($resource) {
        var resourceUrl =  'api/_search/shop-property-categories/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
