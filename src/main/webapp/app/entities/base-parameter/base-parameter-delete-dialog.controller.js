(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('BaseParameterDeleteController',BaseParameterDeleteController);

    BaseParameterDeleteController.$inject = ['$uibModalInstance', 'entity', 'BaseParameter'];

    function BaseParameterDeleteController($uibModalInstance, entity, BaseParameter) {
        var vm = this;

        vm.baseParameter = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            BaseParameter.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
