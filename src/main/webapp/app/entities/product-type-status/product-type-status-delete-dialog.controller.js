(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTypeStatusDeleteController',ProductTypeStatusDeleteController);

    ProductTypeStatusDeleteController.$inject = ['$uibModalInstance', 'entity', 'ProductTypeStatus'];

    function ProductTypeStatusDeleteController($uibModalInstance, entity, ProductTypeStatus) {
        var vm = this;

        vm.productTypeStatus = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ProductTypeStatus.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
