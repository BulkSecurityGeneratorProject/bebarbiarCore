(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('CommentActive', CommentActive);

    CommentActive.$inject = ['$resource'];

    function CommentActive ($resource) {
        var resourceUrl =  'api/comments/active/:id';

        return $resource(resourceUrl, {}, {
            'get':{ method: 'GET' }

        });
    }
})();

