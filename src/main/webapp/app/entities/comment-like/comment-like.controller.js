(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('CommentLikeController', CommentLikeController);

    CommentLikeController.$inject = ['$scope', '$state', 'CommentLike', 'CommentLikeSearch'];

    function CommentLikeController ($scope, $state, CommentLike, CommentLikeSearch) {
        var vm = this;
        
        vm.commentLikes = [];
        vm.search = search;

        loadAll();

        function loadAll() {
            CommentLike.query(function(result) {
                vm.commentLikes = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            CommentLikeSearch.query({query: vm.searchQuery}, function(result) {
                vm.commentLikes = result;
            });
        }    }
})();
