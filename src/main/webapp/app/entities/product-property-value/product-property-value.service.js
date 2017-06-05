(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ProductPropertyValue', ProductPropertyValue);

    ProductPropertyValue.$inject = ['$resource', 'DateUtils'];

    function ProductPropertyValue ($resource, DateUtils) {
        var resourceUrl =  'api/product-property-values/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.fromDateTime = DateUtils.convertDateTimeFromServer(data.fromDateTime);
                        data.toDateTime = DateUtils.convertDateTimeFromServer(data.toDateTime);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
