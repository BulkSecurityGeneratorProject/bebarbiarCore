(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('BaseParameter', BaseParameter);

    BaseParameter.$inject = ['$resource'];

    function BaseParameter ($resource) {
        var resourceUrl =  'api/base-parameters/:id';

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
