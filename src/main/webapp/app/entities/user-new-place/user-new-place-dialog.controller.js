(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserNewPlaceDialogController', UserNewPlaceDialogController);

    UserNewPlaceDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'UserNewPlace', 'User'];

    function UserNewPlaceDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, UserNewPlace, User) {
        var vm = this;

        vm.userNewPlace = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
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
            if (vm.userNewPlace.id !== null) {
                UserNewPlace.update(vm.userNewPlace, onSaveSuccess, onSaveError);
            } else {
                UserNewPlace.save(vm.userNewPlace, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:userNewPlaceUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.createDate = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
