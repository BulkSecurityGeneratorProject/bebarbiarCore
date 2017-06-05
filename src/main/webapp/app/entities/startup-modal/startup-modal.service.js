(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('StartupModal', StartupModal);

    StartupModal.$inject = ['$resource'];

    function StartupModal ($resource) {
        var resourceUrl =  'api/startup-modals/:id';

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
