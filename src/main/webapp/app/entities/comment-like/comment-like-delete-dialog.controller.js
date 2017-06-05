(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('CommentLikeDeleteController',CommentLikeDeleteController);

    CommentLikeDeleteController.$inject = ['$uibModalInstance', 'entity', 'CommentLike'];

    function CommentLikeDeleteController($uibModalInstance, entity, CommentLike) {
        var vm = this;

        vm.commentLike = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            CommentLike.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
