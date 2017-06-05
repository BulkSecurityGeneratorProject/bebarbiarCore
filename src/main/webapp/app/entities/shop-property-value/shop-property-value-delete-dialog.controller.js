(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopPropertyValueDeleteController',ShopPropertyValueDeleteController);

    ShopPropertyValueDeleteController.$inject = ['$uibModalInstance', 'entity', 'ShopPropertyValue'];

    function ShopPropertyValueDeleteController($uibModalInstance, entity, ShopPropertyValue) {
        var vm = this;

        vm.shopPropertyValue = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ShopPropertyValue.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
