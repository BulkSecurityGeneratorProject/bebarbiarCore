(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductPropertyValueDialogController', ProductPropertyValueDialogController);

    ProductPropertyValueDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ProductPropertyValue', 'Product', 'ProductProperty'];

    function ProductPropertyValueDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ProductPropertyValue, Product, ProductProperty) {
        var vm = this;

        vm.productPropertyValue = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.products = Product.query();
        vm.productproperties = ProductProperty.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.productPropertyValue.id !== null) {
                ProductPropertyValue.update(vm.productPropertyValue, onSaveSuccess, onSaveError);
            } else {
                ProductPropertyValue.save(vm.productPropertyValue, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:productPropertyValueUpdate', result);
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
