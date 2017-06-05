(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('UserContactSearch', UserContactSearch);

    UserContactSearch.$inject = ['$resource'];

    function UserContactSearch($resource) {
        var resourceUrl =  'api/_search/user-contacts/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
