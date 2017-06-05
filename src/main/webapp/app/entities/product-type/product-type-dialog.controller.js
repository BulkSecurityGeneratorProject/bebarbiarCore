(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTypeDialogController', ProductTypeDialogController);

    ProductTypeDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'ProductType', 'ProductTypeStatus', 'ProductProperty'];

    function ProductTypeDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, ProductType, ProductTypeStatus, ProductProperty) {
        var vm = this;

        vm.productType = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.producttypestatuses = ProductTypeStatus.query();
        vm.productproperties = ProductProperty.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.productType.id !== null) {
                ProductType.update(vm.productType, onSaveSuccess, onSaveError);
            } else {
                ProductType.save(vm.productType, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:productTypeUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setBanner = function ($file, productType) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        productType.banner = base64Data;
                        productType.bannerContentType = $file.type;
                    });
                });
            }
        };

    }
})();
