(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('PropositionSearch', PropositionSearch);

    PropositionSearch.$inject = ['$resource'];

    function PropositionSearch($resource) {
        var resourceUrl =  'api/_search/propositions/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
