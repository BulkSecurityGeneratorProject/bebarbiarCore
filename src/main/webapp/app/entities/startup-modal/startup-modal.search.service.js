(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('StartupModalSearch', StartupModalSearch);

    StartupModalSearch.$inject = ['$resource'];

    function StartupModalSearch($resource) {
        var resourceUrl =  'api/_search/startup-modals/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
