(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductPropertyValueDeleteController',ProductPropertyValueDeleteController);

    ProductPropertyValueDeleteController.$inject = ['$uibModalInstance', 'entity', 'ProductPropertyValue'];

    function ProductPropertyValueDeleteController($uibModalInstance, entity, ProductPropertyValue) {
        var vm = this;

        vm.productPropertyValue = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ProductPropertyValue.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
