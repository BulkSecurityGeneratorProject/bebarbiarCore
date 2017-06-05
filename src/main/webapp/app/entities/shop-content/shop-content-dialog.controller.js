(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopContentDialogController', ShopContentDialogController);

    ShopContentDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ShopContent', 'Shop'];

    function ShopContentDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ShopContent, Shop) {
        var vm = this;

        vm.shopContent = entity;
        vm.clear = clear;
        vm.save = save;
        vm.shops = Shop.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.shopContent.id !== null) {
                ShopContent.update(vm.shopContent, onSaveSuccess, onSaveError);
            } else {
                ShopContent.save(vm.shopContent, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:shopContentUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
