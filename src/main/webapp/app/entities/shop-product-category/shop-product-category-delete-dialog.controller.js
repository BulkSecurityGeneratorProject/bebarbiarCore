(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopProductCategoryDeleteController',ShopProductCategoryDeleteController);

    ShopProductCategoryDeleteController.$inject = ['$uibModalInstance', 'entity', 'ShopProductCategory'];

    function ShopProductCategoryDeleteController($uibModalInstance, entity, ShopProductCategory) {
        var vm = this;

        vm.shopProductCategory = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ShopProductCategory.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
