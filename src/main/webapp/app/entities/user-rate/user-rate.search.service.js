(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('UserRateSearch', UserRateSearch);

    UserRateSearch.$inject = ['$resource'];

    function UserRateSearch($resource) {
        var resourceUrl =  'api/_search/user-rates/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
