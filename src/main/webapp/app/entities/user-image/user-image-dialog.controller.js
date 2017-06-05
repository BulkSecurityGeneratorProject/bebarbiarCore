(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserImageDialogController', UserImageDialogController);

    UserImageDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', '$q', 'DataUtils', 'entity', 'UserImage', 'User'];

    function UserImageDialogController ($timeout, $scope, $stateParams, $uibModalInstance, $q, DataUtils, entity, UserImage, User) {
        var vm = this;

        vm.userImage = entity;
        vm.clear = clear;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
        vm.save = save;
        vm.users = User.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.userImage.id !== null) {
                UserImage.update(vm.userImage, onSaveSuccess, onSaveError);
            } else {
                UserImage.save(vm.userImage, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:userImageUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


        vm.setImage = function ($file, userImage) {
            if ($file && $file.$error === 'pattern') {
                return;
            }
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        userImage.image = base64Data;
                        userImage.imageContentType = $file.type;
                    });
                });
            }
        };

    }
})();
