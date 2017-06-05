(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductDialogController', ProductDialogController);

    ProductDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Product', 'Shop', 'ProductPropertyValue', 'ProductContent', 'ProductStatus', 'ProductType'];

    function ProductDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Product, Shop, ProductPropertyValue, ProductContent, ProductStatus, ProductType) {
        var vm = this;

        vm.product = entity;
        vm.clear = clear;
        vm.save = save;
        vm.shops = Shop.query();
        vm.productpropertyvalues = ProductPropertyValue.query();
        vm.productcontents = ProductContent.query();
        vm.productstatuses = ProductStatus.query();
        vm.producttypes = ProductType.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.product.id !== null) {
                Product.update(vm.product, onSaveSuccess, onSaveError);
            } else {
                Product.save(vm.product, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:productUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
