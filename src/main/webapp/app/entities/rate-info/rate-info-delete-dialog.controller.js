(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('RateInfoDeleteController',RateInfoDeleteController);

    RateInfoDeleteController.$inject = ['$uibModalInstance', 'entity', 'RateInfo'];

    function RateInfoDeleteController($uibModalInstance, entity, RateInfo) {
        var vm = this;

        vm.rateInfo = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            RateInfo.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
