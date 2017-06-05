(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ProductTypeCategoryUser', ProductTypeCategoryUser);

    ProductTypeCategoryUser.$inject = ['$resource'];

    function ProductTypeCategoryUser ($resource) {
        var resourceUrl =  'api/product-type-categories-user';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
             'get': {
                method: 'GET',isArray: true,
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            }

        });
    }
})();
