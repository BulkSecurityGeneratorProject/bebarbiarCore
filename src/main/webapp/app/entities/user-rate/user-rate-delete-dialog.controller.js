(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserRateDeleteController',UserRateDeleteController);

    UserRateDeleteController.$inject = ['$uibModalInstance', 'entity', 'UserRate'];

    function UserRateDeleteController($uibModalInstance, entity, UserRate) {
        var vm = this;

        vm.userRate = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            UserRate.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
