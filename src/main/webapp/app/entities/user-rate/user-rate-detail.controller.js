(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserRateDetailController', UserRateDetailController);

    UserRateDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'UserRate', 'User', 'Product', 'Shop'];

    function UserRateDetailController($scope, $rootScope, $stateParams, entity, UserRate, User, Product, Shop) {
        var vm = this;

        vm.userRate = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:userRateUpdate', function(event, result) {
            vm.userRate = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
