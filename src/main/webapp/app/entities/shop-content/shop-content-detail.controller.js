(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopContentDetailController', ShopContentDetailController);

    ShopContentDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'ShopContent', 'Shop'];

    function ShopContentDetailController($scope, $rootScope, $stateParams, entity, ShopContent, Shop) {
        var vm = this;

        vm.shopContent = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:shopContentUpdate', function(event, result) {
            vm.shopContent = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
