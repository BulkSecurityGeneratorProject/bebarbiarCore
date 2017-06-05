(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTrustDeleteController',ProductTrustDeleteController);

    ProductTrustDeleteController.$inject = ['$uibModalInstance', 'entity', 'ProductTrust'];

    function ProductTrustDeleteController($uibModalInstance, entity, ProductTrust) {
        var vm = this;

        vm.productTrust = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            ProductTrust.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
