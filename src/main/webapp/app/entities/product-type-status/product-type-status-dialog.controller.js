(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTypeStatusDialogController', ProductTypeStatusDialogController);

    ProductTypeStatusDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ProductTypeStatus'];

    function ProductTypeStatusDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ProductTypeStatus) {
        var vm = this;

        vm.productTypeStatus = entity;
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
            if (vm.productTypeStatus.id !== null) {
                ProductTypeStatus.update(vm.productTypeStatus, onSaveSuccess, onSaveError);
            } else {
                ProductTypeStatus.save(vm.productTypeStatus, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:productTypeStatusUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
