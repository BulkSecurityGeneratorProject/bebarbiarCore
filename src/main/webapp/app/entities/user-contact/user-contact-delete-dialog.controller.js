(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserContactDeleteController',UserContactDeleteController);

    UserContactDeleteController.$inject = ['$uibModalInstance', 'entity', 'UserContact'];

    function UserContactDeleteController($uibModalInstance, entity, UserContact) {
        var vm = this;

        vm.userContact = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;
        
        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            UserContact.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
