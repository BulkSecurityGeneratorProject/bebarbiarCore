(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ProductDiscountSearch', ProductDiscountSearch);

    ProductDiscountSearch.$inject = ['$resource'];

    function ProductDiscountSearch($resource) {
        var resourceUrl =  'api/_search/product-discounts/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
