(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ProductPropertySearch', ProductPropertySearch);

    ProductPropertySearch.$inject = ['$resource'];

    function ProductPropertySearch($resource) {
        var resourceUrl =  'api/_search/product-properties/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
