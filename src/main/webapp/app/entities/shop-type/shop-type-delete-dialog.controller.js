(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopTypeDeleteController',ShopTypeDeleteController);

    ShopTypeDeleteController.$inject = ['$uibModalInstance', 'entity', 'ShopType'];

    function ShopTypeDeleteController($uibModalInstance, entity, ShopType) {
        var vm = this;

        vm.shopType = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ShopType.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
