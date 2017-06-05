(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('ProductTypeCategorySearch', ProductTypeCategorySearch);

    ProductTypeCategorySearch.$inject = ['$resource'];

    function ProductTypeCategorySearch($resource) {
        var resourceUrl =  'api/_search/product-type-categories/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
