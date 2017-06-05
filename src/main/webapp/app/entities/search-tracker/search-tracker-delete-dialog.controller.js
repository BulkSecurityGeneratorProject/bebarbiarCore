(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('SearchTrackerDeleteController',SearchTrackerDeleteController);

    SearchTrackerDeleteController.$inject = ['$uibModalInstance', 'entity', 'SearchTracker'];

    function SearchTrackerDeleteController($uibModalInstance, entity, SearchTracker) {
        var vm = this;

        vm.searchTracker = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            SearchTracker.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
