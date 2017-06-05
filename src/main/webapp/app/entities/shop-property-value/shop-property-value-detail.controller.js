(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopPropertyValueDetailController', ShopPropertyValueDetailController);

    ShopPropertyValueDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'ShopPropertyValue', 'Shop', 'ShopProperty'];

    function ShopPropertyValueDetailController($scope, $rootScope, $stateParams, entity, ShopPropertyValue, Shop, ShopProperty) {
        var vm = this;

        vm.shopPropertyValue = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:shopPropertyValueUpdate', function(event, result) {
            vm.shopPropertyValue = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
