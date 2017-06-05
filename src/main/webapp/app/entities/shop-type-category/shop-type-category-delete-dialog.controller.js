(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopTypeCategoryDeleteController',ShopTypeCategoryDeleteController);

    ShopTypeCategoryDeleteController.$inject = ['$uibModalInstance', 'entity', 'ShopTypeCategory'];

    function ShopTypeCategoryDeleteController($uibModalInstance, entity, ShopTypeCategory) {
        var vm = this;

        vm.shopTypeCategory = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ShopTypeCategory.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
