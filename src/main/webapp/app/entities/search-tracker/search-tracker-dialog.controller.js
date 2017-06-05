(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('SearchTrackerDialogController', SearchTrackerDialogController);

    SearchTrackerDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'SearchTracker', 'ShopType', 'User'];

    function SearchTrackerDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, SearchTracker, ShopType, User) {
        var vm = this;

        vm.searchTracker = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.save = save;
        vm.shoptypes = ShopType.query();
        vm.users = User.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.searchTracker.id !== null) {
                SearchTracker.update(vm.searchTracker, onSaveSuccess, onSaveError);
            } else {
                SearchTracker.save(vm.searchTracker, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:searchTrackerUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.datetime = false;

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
