(function () {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('CommentController', CommentController);

    CommentController.$inject = ['$scope', '$state', 'Comment', 'CommentSearch', 'CommentActive', 'CommentReject'];

    function CommentController($scope, $state, Comment, CommentSearch, CommentActive, CommentReject) {
        var vm = this;

        vm.comments = [];
        vm.search = search;
        vm.loadAll = loadAll;

        vm.active = active;
        vm.reject = reject;

        function active(comment) {
            CommentActive.get({id: comment}, function () {
                vm.loadAll();

            });
        }

        loadAll();
        function reject(comment) {
            CommentReject.get({id: comment}, function () {
                vm.loadAll();
                vm.clear();
            });
        }


        function loadAll() {
            Comment.query(function (result) {
                vm.comments = result;
            });
        }

        function search() {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            CommentSearch.query({query: vm.searchQuery}, function (result) {
                vm.comments = result;
            });
        }

    }
})();
