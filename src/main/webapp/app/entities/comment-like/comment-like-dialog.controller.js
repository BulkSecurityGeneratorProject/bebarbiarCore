(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('CommentLikeDialogController', CommentLikeDialogController);

    CommentLikeDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'CommentLike', 'User', 'Comment'];

    function CommentLikeDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, CommentLike, User, Comment) {
        var vm = this;

        vm.commentLike = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.users = User.query();
        vm.comments = Comment.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.commentLike.id !== null) {
                CommentLike.update(vm.commentLike, onSaveSuccess, onSaveError);
            } else {
                CommentLike.save(vm.commentLike, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:commentLikeUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.dateOfLike = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
