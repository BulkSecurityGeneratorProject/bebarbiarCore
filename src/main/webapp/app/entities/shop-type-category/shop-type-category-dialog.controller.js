(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopTypeCategoryDialogController', ShopTypeCategoryDialogController);

    ShopTypeCategoryDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ShopTypeCategory'];

    function ShopTypeCategoryDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ShopTypeCategory) {
        var vm = this;

        vm.shopTypeCategory = entity;
        vm.clear = clear;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.shopTypeCategory.id !== null) {
                ShopTypeCategory.update(vm.shopTypeCategory, onSaveSuccess, onSaveError);
            } else {
                ShopTypeCategory.save(vm.shopTypeCategory, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:shopTypeCategoryUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
