(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserDetailController', UserDetailController);

    UserDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'User'];

    function UserDetailController($scope, $rootScope, $stateParams, entity, User) {
        var vm = this;

        vm.user = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:userUpdate', function(event, result) {
            vm.user = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
