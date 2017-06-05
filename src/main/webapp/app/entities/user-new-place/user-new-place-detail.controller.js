(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserNewPlaceDetailController', UserNewPlaceDetailController);

    UserNewPlaceDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'UserNewPlace', 'User'];

    function UserNewPlaceDetailController($scope, $rootScope, $stateParams, entity, UserNewPlace, User) {
        var vm = this;

        vm.userNewPlace = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:userNewPlaceUpdate', function(event, result) {
            vm.userNewPlace = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
