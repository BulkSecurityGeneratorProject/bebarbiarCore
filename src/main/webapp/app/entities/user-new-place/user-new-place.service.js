(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('UserNewPlace', UserNewPlace);

    UserNewPlace.$inject = ['$resource', 'DateUtils'];

    function UserNewPlace ($resource, DateUtils) {
        var resourceUrl =  'api/user-new-places/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.createDate = DateUtils.convertDateTimeFromServer(data.createDate);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
