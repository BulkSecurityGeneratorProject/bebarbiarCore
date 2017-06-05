(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ProductStatusSearch', ProductStatusSearch);

    ProductStatusSearch.$inject = ['$resource'];

    function ProductStatusSearch($resource) {
        var resourceUrl =  'api/_search/product-statuses/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
