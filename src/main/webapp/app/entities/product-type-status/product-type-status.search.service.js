(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ProductTypeStatusSearch', ProductTypeStatusSearch);

    ProductTypeStatusSearch.$inject = ['$resource'];

    function ProductTypeStatusSearch($resource) {
        var resourceUrl =  'api/_search/product-type-statuses/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
