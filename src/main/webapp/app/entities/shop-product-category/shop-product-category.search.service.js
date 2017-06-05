(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ShopProductCategorySearch', ShopProductCategorySearch);

    ShopProductCategorySearch.$inject = ['$resource'];

    function ShopProductCategorySearch($resource) {
        var resourceUrl =  'api/_search/shop-product-categories/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
