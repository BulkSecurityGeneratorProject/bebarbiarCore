(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('RateInfo', RateInfo);

    RateInfo.$inject = ['$resource'];

    function RateInfo ($resource) {
        var resourceUrl =  'api/rate-infos/:id';

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
