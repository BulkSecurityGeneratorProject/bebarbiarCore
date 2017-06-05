(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductDiscountDialogController', ProductDiscountDialogController);

    ProductDiscountDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ProductDiscount', 'Product'];

    function ProductDiscountDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ProductDiscount, Product) {
        var vm = this;

        vm.productDiscount = entity;
        vm.clear = clear;
        vm.save = save;
        vm.products = Product.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.productDiscount.id !== null) {
                ProductDiscount.update(vm.productDiscount, onSaveSuccess, onSaveError);
            } else {
                ProductDiscount.save(vm.productDiscount, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:productDiscountUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
