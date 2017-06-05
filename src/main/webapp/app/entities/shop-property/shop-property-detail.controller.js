(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopPropertyDetailController', ShopPropertyDetailController);

    ShopPropertyDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'ShopProperty', 'ShopPropertyCategory'];

    function ShopPropertyDetailController($scope, $rootScope, $stateParams, previousState, entity, ShopProperty, ShopPropertyCategory) {
        var vm = this;

        vm.shopProperty = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('productManagementApp:shopPropertyUpdate', function(event, result) {
            vm.shopProperty = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
