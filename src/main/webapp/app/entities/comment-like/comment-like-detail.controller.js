(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('CommentLikeDetailController', CommentLikeDetailController);

    CommentLikeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'CommentLike', 'User', 'Comment'];

    function CommentLikeDetailController($scope, $rootScope, $stateParams, entity, CommentLike, User, Comment) {
        var vm = this;

        vm.commentLike = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:commentLikeUpdate', function(event, result) {
            vm.commentLike = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
