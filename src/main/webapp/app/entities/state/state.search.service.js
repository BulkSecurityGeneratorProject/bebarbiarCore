(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('StateSearch', StateSearch);

    StateSearch.$inject = ['$resource'];

    function StateSearch($resource) {
        var resourceUrl =  'api/_search/states/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
