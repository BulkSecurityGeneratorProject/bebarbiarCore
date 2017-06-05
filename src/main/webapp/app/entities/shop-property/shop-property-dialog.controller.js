(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopPropertyDialogController', ShopPropertyDialogController);

    ShopPropertyDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ShopProperty', 'ShopPropertyCategory'];

    function ShopPropertyDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ShopProperty, ShopPropertyCategory) {
        var vm = this;

        vm.shopProperty = entity;
        vm.clear = clear;
        vm.save = save;
        vm.shoppropertycategories = ShopPropertyCategory.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.shopProperty.id !== null) {
                ShopProperty.update(vm.shopProperty, onSaveSuccess, onSaveError);
            } else {
                ShopProperty.save(vm.shopProperty, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:shopPropertyUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
