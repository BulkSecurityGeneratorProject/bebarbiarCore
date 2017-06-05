(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('UserContact', UserContact);

    UserContact.$inject = ['$resource'];

    function UserContact ($resource) {
        var resourceUrl =  'api/user-contacts/:id';

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
