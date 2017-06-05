(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('RateInfoDialogController', RateInfoDialogController);

    RateInfoDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'RateInfo'];

    function RateInfoDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, RateInfo) {
        var vm = this;

        vm.rateInfo = entity;
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
            if (vm.rateInfo.id !== null) {
                RateInfo.update(vm.rateInfo, onSaveSuccess, onSaveError);
            } else {
                RateInfo.save(vm.rateInfo, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:rateInfoUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
