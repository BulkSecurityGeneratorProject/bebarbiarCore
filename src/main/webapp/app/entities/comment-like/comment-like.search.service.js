(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .factory('CommentLikeSearch', CommentLikeSearch);

    CommentLikeSearch.$inject = ['$resource'];

    function CommentLikeSearch($resource) {
        var resourceUrl =  'api/_search/comment-likes/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
