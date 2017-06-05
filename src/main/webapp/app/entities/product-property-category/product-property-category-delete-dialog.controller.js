(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductPropertyCategoryDeleteController',ProductPropertyCategoryDeleteController);

    ProductPropertyCategoryDeleteController.$inject = ['$uibModalInstance', 'entity', 'ProductPropertyCategory'];

    function ProductPropertyCategoryDeleteController($uibModalInstance, entity, ProductPropertyCategory) {
        var vm = this;

        vm.productPropertyCategory = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ProductPropertyCategory.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
