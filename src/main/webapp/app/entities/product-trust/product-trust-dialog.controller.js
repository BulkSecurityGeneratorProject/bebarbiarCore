(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTrustDialogController', ProductTrustDialogController);

    ProductTrustDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ProductTrust', 'Product', 'User'];

    function ProductTrustDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ProductTrust, Product, User) {
        var vm = this;

        vm.productTrust = entity;
        vm.clear = clear;
        vm.save = save;
        vm.products = Product.query();
        vm.users = User.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.productTrust.id !== null) {
                ProductTrust.update(vm.productTrust, onSaveSuccess, onSaveError);
            } else {
                ProductTrust.save(vm.productTrust, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:productTrustUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
