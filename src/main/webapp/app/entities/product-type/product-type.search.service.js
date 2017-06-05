(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ProductTypeSearch', ProductTypeSearch);

    ProductTypeSearch.$inject = ['$resource'];

    function ProductTypeSearch($resource) {
        var resourceUrl =  'api/_search/product-types/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
