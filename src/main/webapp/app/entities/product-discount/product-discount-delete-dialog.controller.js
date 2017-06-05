(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductDiscountDeleteController',ProductDiscountDeleteController);

    ProductDiscountDeleteController.$inject = ['$uibModalInstance', 'entity', 'ProductDiscount'];

    function ProductDiscountDeleteController($uibModalInstance, entity, ProductDiscount) {
        var vm = this;

        vm.productDiscount = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ProductDiscount.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
