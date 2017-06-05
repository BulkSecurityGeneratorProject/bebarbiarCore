(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopDetailController', ShopDetailController);

    ShopDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Shop', 'State', 'ShopPropertyValue', 'User', 'ShopType'];

    function ShopDetailController($scope, $rootScope, $stateParams, previousState, entity, Shop, State, ShopPropertyValue, User, ShopType) {
        var vm = this;

        vm.shop = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('productManagementApp:shopUpdate', function(event, result) {
            vm.shop = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
