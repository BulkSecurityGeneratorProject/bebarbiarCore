(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductContentDialogController', ProductContentDialogController);

    ProductContentDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'ProductContent', 'Product'];

    function ProductContentDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, ProductContent, Product) {
        var vm = this;

        vm.productContent = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.products = Product.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.productContent.id !== null) {
                ProductContent.update(vm.productContent, onSaveSuccess, onSaveError);
            } else {
                ProductContent.save(vm.productContent, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:productContentUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setPoster = function ($file, productContent) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        productContent.poster = base64Data;
                        productContent.posterContentType = $file.type;
                    });
                });
            }
        };

        vm.setContent = function ($file, productContent) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        productContent.content = base64Data;
                        productContent.contentContentType = $file.type;
                    });
                });
            }
        };

    }
})();
