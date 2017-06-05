(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('UserImageSearch', UserImageSearch);

    UserImageSearch.$inject = ['$resource'];

    function UserImageSearch($resource) {
        var resourceUrl =  'api/_search/user-images/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
