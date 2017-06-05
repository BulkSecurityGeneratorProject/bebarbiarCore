(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductPropertyDeleteController',ProductPropertyDeleteController);

    ProductPropertyDeleteController.$inject = ['$uibModalInstance', 'entity', 'ProductProperty'];

    function ProductPropertyDeleteController($uibModalInstance, entity, ProductProperty) {
        var vm = this;

        vm.productProperty = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ProductProperty.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
