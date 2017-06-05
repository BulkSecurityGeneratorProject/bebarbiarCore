(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopPropertyCategoryDialogController', ShopPropertyCategoryDialogController);

    ShopPropertyCategoryDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ShopPropertyCategory'];

    function ShopPropertyCategoryDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ShopPropertyCategory) {
        var vm = this;

        vm.shopPropertyCategory = entity;
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
            if (vm.shopPropertyCategory.id !== null) {
                ShopPropertyCategory.update(vm.shopPropertyCategory, onSaveSuccess, onSaveError);
            } else {
                ShopPropertyCategory.save(vm.shopPropertyCategory, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:shopPropertyCategoryUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
