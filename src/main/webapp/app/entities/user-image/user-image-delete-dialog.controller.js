(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserImageDeleteController',UserImageDeleteController);

    UserImageDeleteController.$inject = ['$uibModalInstance', 'entity', 'UserImage'];

    function UserImageDeleteController($uibModalInstance, entity, UserImage) {
        var vm = this;

        vm.userImage = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            UserImage.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
