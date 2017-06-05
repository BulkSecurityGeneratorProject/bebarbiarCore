(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopProductCategoryDialogController', ShopProductCategoryDialogController);

    ShopProductCategoryDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ShopProductCategory', 'Shop', 'ProductTypeCategory'];

    function ShopProductCategoryDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ShopProductCategory, Shop, ProductTypeCategory) {
        var vm = this;

        vm.shopProductCategory = entity;
        vm.clear = clear;
        vm.save = save;
        vm.shops = Shop.query();
        vm.producttypecategories = ProductTypeCategory.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.shopProductCategory.id !== null) {
                ShopProductCategory.update(vm.shopProductCategory, onSaveSuccess, onSaveError);
            } else {
                ShopProductCategory.save(vm.shopProductCategory, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:shopProductCategoryUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
