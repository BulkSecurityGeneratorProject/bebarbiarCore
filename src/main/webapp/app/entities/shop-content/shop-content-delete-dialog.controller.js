(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopContentDeleteController',ShopContentDeleteController);

    ShopContentDeleteController.$inject = ['$uibModalInstance', 'entity', 'ShopContent'];

    function ShopContentDeleteController($uibModalInstance, entity, ShopContent) {
        var vm = this;

        vm.shopContent = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ShopContent.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
