(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductContentDeleteController',ProductContentDeleteController);

    ProductContentDeleteController.$inject = ['$uibModalInstance', 'entity', 'ProductContent'];

    function ProductContentDeleteController($uibModalInstance, entity, ProductContent) {
        var vm = this;

        vm.productContent = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ProductContent.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
