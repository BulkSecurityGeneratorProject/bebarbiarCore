(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ProductStatusHistorySearch', ProductStatusHistorySearch);

    ProductStatusHistorySearch.$inject = ['$resource'];

    function ProductStatusHistorySearch($resource) {
        var resourceUrl =  'api/_search/product-status-histories/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
