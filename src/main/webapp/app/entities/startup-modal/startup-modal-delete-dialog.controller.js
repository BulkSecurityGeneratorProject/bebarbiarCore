(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('StartupModalDeleteController',StartupModalDeleteController);

    StartupModalDeleteController.$inject = ['$uibModalInstance', 'entity', 'StartupModal'];

    function StartupModalDeleteController($uibModalInstance, entity, StartupModal) {
        var vm = this;

        vm.startupModal = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            StartupModal.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
