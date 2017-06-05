(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ProductTrustSearch', ProductTrustSearch);

    ProductTrustSearch.$inject = ['$resource'];

    function ProductTrustSearch($resource) {
        var resourceUrl =  'api/_search/product-trusts/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
