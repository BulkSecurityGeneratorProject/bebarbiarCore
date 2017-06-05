(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('SearchTracker', SearchTracker);

    SearchTracker.$inject = ['$resource', 'DateUtils'];

    function SearchTracker ($resource, DateUtils) {
        var resourceUrl =  'api/search-trackers/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.datetime = DateUtils.convertDateTimeFromServer(data.datetime);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
