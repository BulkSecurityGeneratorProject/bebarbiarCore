(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('RateInfoSearch', RateInfoSearch);

    RateInfoSearch.$inject = ['$resource'];

    function RateInfoSearch($resource) {
        var resourceUrl =  'api/_search/rate-infos/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
