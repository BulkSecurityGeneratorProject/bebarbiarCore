(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopPropertyValueDialogController', ShopPropertyValueDialogController);

    ShopPropertyValueDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ShopPropertyValue', 'Shop', 'ShopProperty'];

    function ShopPropertyValueDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ShopPropertyValue, Shop, ShopProperty) {
        var vm = this;

        vm.shopPropertyValue = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.shops = Shop.query();
        vm.shopproperties = ShopProperty.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.shopPropertyValue.id !== null) {
                ShopPropertyValue.update(vm.shopPropertyValue, onSaveSuccess, onSaveError);
            } else {
                ShopPropertyValue.save(vm.shopPropertyValue, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:shopPropertyValueUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.fromDateTime = false;
        vm.datePickerOpenStatus.toDateTime = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
