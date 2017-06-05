(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTypeDeleteController',ProductTypeDeleteController);

    ProductTypeDeleteController.$inject = ['$uibModalInstance', 'entity', 'ProductType'];

    function ProductTypeDeleteController($uibModalInstance, entity, ProductType) {
        var vm = this;

        vm.productType = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ProductType.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
