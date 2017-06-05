(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopPropertyCategoryDeleteController',ShopPropertyCategoryDeleteController);

    ShopPropertyCategoryDeleteController.$inject = ['$uibModalInstance', 'entity', 'ShopPropertyCategory'];

    function ShopPropertyCategoryDeleteController($uibModalInstance, entity, ShopPropertyCategory) {
        var vm = this;

        vm.shopPropertyCategory = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ShopPropertyCategory.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
