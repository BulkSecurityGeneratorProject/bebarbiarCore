(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopPropertyCategoryDetailController', ShopPropertyCategoryDetailController);

    ShopPropertyCategoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'ShopPropertyCategory'];

    function ShopPropertyCategoryDetailController($scope, $rootScope, $stateParams, entity, ShopPropertyCategory) {
        var vm = this;

        vm.shopPropertyCategory = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:shopPropertyCategoryUpdate', function(event, result) {
            vm.shopPropertyCategory = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
