(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductStatusDialogController', ProductStatusDialogController);

    ProductStatusDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ProductStatus'];

    function ProductStatusDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ProductStatus) {
        var vm = this;

        vm.productStatus = entity;
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
            if (vm.productStatus.id !== null) {
                ProductStatus.update(vm.productStatus, onSaveSuccess, onSaveError);
            } else {
                ProductStatus.save(vm.productStatus, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:productStatusUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
