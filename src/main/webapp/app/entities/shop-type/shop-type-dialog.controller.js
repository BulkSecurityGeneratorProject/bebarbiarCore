(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopTypeDialogController', ShopTypeDialogController);

    ShopTypeDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ShopType', 'ShopProperty', 'ShopTypeCategory'];

    function ShopTypeDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ShopType, ShopProperty, ShopTypeCategory) {
        var vm = this;

        vm.shopType = entity;
        vm.clear = clear;
        vm.save = save;
        vm.shopproperties = ShopProperty.query();
        vm.shoptypecategories = ShopTypeCategory.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.shopType.id !== null) {
                ShopType.update(vm.shopType, onSaveSuccess, onSaveError);
            } else {
                ShopType.save(vm.shopType, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:shopTypeUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
