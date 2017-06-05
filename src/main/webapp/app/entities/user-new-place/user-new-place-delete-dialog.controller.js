(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserNewPlaceDeleteController',UserNewPlaceDeleteController);

    UserNewPlaceDeleteController.$inject = ['$uibModalInstance', 'entity', 'UserNewPlace'];

    function UserNewPlaceDeleteController($uibModalInstance, entity, UserNewPlace) {
        var vm = this;

        vm.userNewPlace = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            UserNewPlace.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
