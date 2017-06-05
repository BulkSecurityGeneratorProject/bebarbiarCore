(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('UserNewPlaceActive', UserNewPlaceActive);

    UserNewPlaceActive.$inject = ['$resource'];

    function UserNewPlaceActive ($resource) {
        var resourceUrl =  'api/user-new-places/active/:id';

        return $resource(resourceUrl, {}, {
            'get': { method: 'GET'}
        });
    }
})();
