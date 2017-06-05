(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ProductTypeStatus', ProductTypeStatus);

    ProductTypeStatus.$inject = ['$resource'];

    function ProductTypeStatus ($resource) {
        var resourceUrl =  'api/product-type-statuses/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
