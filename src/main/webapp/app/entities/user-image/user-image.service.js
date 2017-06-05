(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('UserImage', UserImage);

    UserImage.$inject = ['$resource'];

    function UserImage ($resource) {
        var resourceUrl =  'api/user-images/:id';

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
