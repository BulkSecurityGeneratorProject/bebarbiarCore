(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopPropertyDeleteController',ShopPropertyDeleteController);

    ShopPropertyDeleteController.$inject = ['$uibModalInstance', 'entity', 'ShopProperty'];

    function ShopPropertyDeleteController($uibModalInstance, entity, ShopProperty) {
        var vm = this;

        vm.shopProperty = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ShopProperty.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
