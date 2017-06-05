(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserContactDialogController', UserContactDialogController);

    UserContactDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'UserContact'];

    function UserContactDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, UserContact) {
        var vm = this;

        vm.userContact = entity;
        vm.clear = clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.userContact.id !== null) {
                UserContact.update(vm.userContact, onSaveSuccess, onSaveError);
            } else {
                UserContact.save(vm.userContact, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:userContactUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
