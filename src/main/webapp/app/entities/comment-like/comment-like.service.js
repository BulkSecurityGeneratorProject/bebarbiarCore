(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('CommentLike', CommentLike);

    CommentLike.$inject = ['$resource', 'DateUtils'];

    function CommentLike ($resource, DateUtils) {
        var resourceUrl =  'api/comment-likes/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.dateOfLike = DateUtils.convertDateTimeFromServer(data.dateOfLike);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
