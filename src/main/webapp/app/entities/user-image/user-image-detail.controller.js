(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserImageDetailController', UserImageDetailController);

    UserImageDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'UserImage', 'User'];

    function UserImageDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, UserImage, User) {
        var vm = this;

        vm.userImage = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('productManagementApp:userImageUpdate', function(event, result) {
            vm.userImage = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
