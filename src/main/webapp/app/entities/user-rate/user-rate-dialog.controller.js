(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserRateDialogController', UserRateDialogController);

    UserRateDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'UserRate', 'User', 'Product', 'Shop'];

    function UserRateDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, UserRate, User, Product, Shop) {
        var vm = this;

        vm.userRate = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.users = User.query();
        vm.products = Product.query();
        vm.shops = Shop.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.userRate.id !== null) {
                UserRate.update(vm.userRate, onSaveSuccess, onSaveError);
            } else {
                UserRate.save(vm.userRate, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:userRateUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.dateOfRate = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
