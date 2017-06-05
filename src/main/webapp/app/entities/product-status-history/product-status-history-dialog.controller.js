(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductStatusHistoryDialogController', ProductStatusHistoryDialogController);

    ProductStatusHistoryDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ProductStatusHistory', 'Product', 'ProductStatus'];

    function ProductStatusHistoryDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ProductStatusHistory, Product, ProductStatus) {
        var vm = this;

        vm.productStatusHistory = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.products = Product.query();
        vm.productstatuses = ProductStatus.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.productStatusHistory.id !== null) {
                ProductStatusHistory.update(vm.productStatusHistory, onSaveSuccess, onSaveError);
            } else {
                ProductStatusHistory.save(vm.productStatusHistory, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:productStatusHistoryUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.createDateTime = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
