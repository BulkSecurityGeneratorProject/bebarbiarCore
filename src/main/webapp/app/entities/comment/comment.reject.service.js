(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('CommentReject', CommentReject);

    CommentReject.$inject = ['$resource'];

    function CommentReject($resource) {
        var resourceUrl =  'api/comments/reject/:id';

        return $resource(resourceUrl, {}, {
            'get':{ method: 'GET' }

        });
    }
})();

