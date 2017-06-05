(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('StartupModalDialogController', StartupModalDialogController);

    StartupModalDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'StartupModal'];

    function StartupModalDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, StartupModal) {
        var vm = this;

        vm.startupModal = entity;
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
            if (vm.startupModal.id !== null) {
                StartupModal.update(vm.startupModal, onSaveSuccess, onSaveError);
            } else {
                StartupModal.save(vm.startupModal, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:startupModalUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
