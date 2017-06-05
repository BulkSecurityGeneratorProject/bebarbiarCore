(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserContactDetailController', UserContactDetailController);

    UserContactDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'UserContact'];

    function UserContactDetailController($scope, $rootScope, $stateParams, entity, UserContact) {
        var vm = this;

        vm.userContact = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:userContactUpdate', function(event, result) {
            vm.userContact = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
