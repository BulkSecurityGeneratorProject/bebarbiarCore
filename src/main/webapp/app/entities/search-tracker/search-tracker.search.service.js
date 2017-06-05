(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('SearchTrackerSearch', SearchTrackerSearch);

    SearchTrackerSearch.$inject = ['$resource'];

    function SearchTrackerSearch($resource) {
        var resourceUrl =  'api/_search/search-trackers/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
