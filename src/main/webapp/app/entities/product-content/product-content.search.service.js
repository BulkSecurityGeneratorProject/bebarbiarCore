(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ProductContentSearch', ProductContentSearch);

    ProductContentSearch.$inject = ['$resource'];

    function ProductContentSearch($resource) {
        var resourceUrl =  'api/_search/product-contents/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
