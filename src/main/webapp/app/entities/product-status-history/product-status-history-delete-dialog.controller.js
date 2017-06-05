(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductStatusHistoryDeleteController',ProductStatusHistoryDeleteController);

    ProductStatusHistoryDeleteController.$inject = ['$uibModalInstance', 'entity', 'ProductStatusHistory'];

    function ProductStatusHistoryDeleteController($uibModalInstance, entity, ProductStatusHistory) {
        var vm = this;

        vm.productStatusHistory = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ProductStatusHistory.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
