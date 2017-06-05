(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ProductStatusHistory', ProductStatusHistory);

    ProductStatusHistory.$inject = ['$resource', 'DateUtils'];

    function ProductStatusHistory ($resource, DateUtils) {
        var resourceUrl =  'api/product-status-histories/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.createDateTime = DateUtils.convertDateTimeFromServer(data.createDateTime);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
