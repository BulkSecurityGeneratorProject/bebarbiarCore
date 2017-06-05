(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTypeCategoryDialogController', ProductTypeCategoryDialogController);

    ProductTypeCategoryDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'ProductTypeCategory', 'ProductTypeStatus'];

    function ProductTypeCategoryDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, ProductTypeCategory, ProductTypeStatus) {
        var vm = this;

        vm.productTypeCategory = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.producttypestatuses = ProductTypeStatus.query();
        vm.producttypecategories = ProductTypeCategory.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.productTypeCategory.id !== null) {
                ProductTypeCategory.update(vm.productTypeCategory, onSaveSuccess, onSaveError);
            } else {
                ProductTypeCategory.save(vm.productTypeCategory, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:productTypeCategoryUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setIconImage = function ($file, productTypeCategory) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        productTypeCategory.iconImage = base64Data;
                        productTypeCategory.iconImageContentType = $file.type;
                    });
                });
            }
        };

    }
})();
