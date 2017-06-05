(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('UserNewPlaceSearch', UserNewPlaceSearch);

    UserNewPlaceSearch.$inject = ['$resource'];

    function UserNewPlaceSearch($resource) {
        var resourceUrl =  'api/_search/user-new-places/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
