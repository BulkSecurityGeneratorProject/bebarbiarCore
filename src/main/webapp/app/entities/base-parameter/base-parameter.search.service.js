(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('BaseParameterSearch', BaseParameterSearch);

    BaseParameterSearch.$inject = ['$resource'];

    function BaseParameterSearch($resource) {
        var resourceUrl =  'api/_search/base-parameters/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
