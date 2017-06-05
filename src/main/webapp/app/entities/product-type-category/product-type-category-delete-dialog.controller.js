(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTypeCategoryDeleteController',ProductTypeCategoryDeleteController);

    ProductTypeCategoryDeleteController.$inject = ['$uibModalInstance', 'entity', 'ProductTypeCategory'];

    function ProductTypeCategoryDeleteController($uibModalInstance, entity, ProductTypeCategory) {
        var vm = this;

        vm.productTypeCategory = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ProductTypeCategory.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
