(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ProductPropertyValueSearch', ProductPropertyValueSearch);

    ProductPropertyValueSearch.$inject = ['$resource'];

    function ProductPropertyValueSearch($resource) {
        var resourceUrl =  'api/_search/product-property-values/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
