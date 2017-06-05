(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductPropertyDialogController', ProductPropertyDialogController);

    ProductPropertyDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ProductProperty', 'ProductPropertyCategory', 'ProductType'];

    function ProductPropertyDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ProductProperty, ProductPropertyCategory, ProductType) {
        var vm = this;

        vm.productProperty = entity;
        vm.clear = clear;
        vm.save = save;
        vm.productpropertycategories = ProductPropertyCategory.query();
        vm.productTypes = ProductType.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.productProperty.id !== null) {
                ProductProperty.update(vm.productProperty, onSaveSuccess, onSaveError);
            } else {
                ProductProperty.save(vm.productProperty, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:productPropertyUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
