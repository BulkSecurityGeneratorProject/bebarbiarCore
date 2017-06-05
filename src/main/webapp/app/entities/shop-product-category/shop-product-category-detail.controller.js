(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopProductCategoryDetailController', ShopProductCategoryDetailController);

    ShopProductCategoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'ShopProductCategory', 'Shop', 'ProductTypeCategory'];

    function ShopProductCategoryDetailController($scope, $rootScope, $stateParams, entity, ShopProductCategory, Shop, ProductTypeCategory) {
        var vm = this;

        vm.shopProductCategory = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:shopProductCategoryUpdate', function(event, result) {
            vm.shopProductCategory = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
