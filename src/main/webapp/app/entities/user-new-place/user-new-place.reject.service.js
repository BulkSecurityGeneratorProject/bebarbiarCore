(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('UserNewPlaceReject', UserNewPlaceReject);

    UserNewPlaceReject.$inject = ['$resource'];

    function UserNewPlaceReject ($resource) {
        var resourceUrl =  'api/user-new-places/reject/:id';

        return $resource(resourceUrl, {}, {

            'get': {
                method: 'GET'

            }
        });
    }
})();
