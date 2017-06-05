(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('BaseParameterDialogController', BaseParameterDialogController);

    BaseParameterDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'BaseParameter'];

    function BaseParameterDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, BaseParameter) {
        var vm = this;

        vm.baseParameter = entity;
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
            if (vm.baseParameter.id !== null) {
                BaseParameter.update(vm.baseParameter, onSaveSuccess, onSaveError);
            } else {
                BaseParameter.save(vm.baseParameter, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:baseParameterUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
