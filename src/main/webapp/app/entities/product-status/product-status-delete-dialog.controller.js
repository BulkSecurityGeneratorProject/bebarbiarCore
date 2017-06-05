(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductStatusDeleteController',ProductStatusDeleteController);

    ProductStatusDeleteController.$inject = ['$uibModalInstance', 'entity', 'ProductStatus'];

    function ProductStatusDeleteController($uibModalInstance, entity, ProductStatus) {
        var vm = this;

        vm.productStatus = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ProductStatus.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
