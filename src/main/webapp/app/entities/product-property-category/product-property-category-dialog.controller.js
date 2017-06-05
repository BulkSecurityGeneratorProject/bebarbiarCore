(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductPropertyCategoryDialogController', ProductPropertyCategoryDialogController);

    ProductPropertyCategoryDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'ProductPropertyCategory'];

    function ProductPropertyCategoryDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, ProductPropertyCategory) {
        var vm = this;

        vm.productPropertyCategory = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.productPropertyCategory.id !== null) {
                ProductPropertyCategory.update(vm.productPropertyCategory, onSaveSuccess, onSaveError);
            } else {
                ProductPropertyCategory.save(vm.productPropertyCategory, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:productPropertyCategoryUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setIcon = function ($file, productPropertyCategory) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        productPropertyCategory.icon = base64Data;
                        productPropertyCategory.iconContentType = $file.type;
                    });
                });
            }
        };

    }
})();
