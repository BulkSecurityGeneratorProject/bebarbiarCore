(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('UserRate', UserRate);

    UserRate.$inject = ['$resource', 'DateUtils'];

    function UserRate ($resource, DateUtils) {
        var resourceUrl =  'api/user-rates/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.dateOfRate = DateUtils.convertDateTimeFromServer(data.dateOfRate);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
