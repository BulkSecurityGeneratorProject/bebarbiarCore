(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopTypeDetailController', ShopTypeDetailController);

    ShopTypeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'ShopType', 'ShopProperty', 'ShopTypeCategory'];

    function ShopTypeDetailController($scope, $rootScope, $stateParams, entity, ShopType, ShopProperty, ShopTypeCategory) {
        var vm = this;

        vm.shopType = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:shopTypeUpdate', function(event, result) {
            vm.shopType = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
