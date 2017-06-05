(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ShopPropertyValue', ShopPropertyValue);

    ShopPropertyValue.$inject = ['$resource', 'DateUtils'];

    function ShopPropertyValue ($resource, DateUtils) {
        var resourceUrl =  'api/shop-property-values/:id';

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
