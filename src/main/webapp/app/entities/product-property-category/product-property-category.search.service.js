(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ProductPropertyCategorySearch', ProductPropertyCategorySearch);

    ProductPropertyCategorySearch.$inject = ['$resource'];

    function ProductPropertyCategorySearch($resource) {
        var resourceUrl =  'api/_search/product-property-categories/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
