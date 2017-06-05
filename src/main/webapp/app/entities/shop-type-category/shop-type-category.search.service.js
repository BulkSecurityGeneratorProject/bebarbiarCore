(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ShopTypeCategorySearch', ShopTypeCategorySearch);

    ShopTypeCategorySearch.$inject = ['$resource'];

    function ShopTypeCategorySearch($resource) {
        var resourceUrl =  'api/_search/shop-type-categories/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
