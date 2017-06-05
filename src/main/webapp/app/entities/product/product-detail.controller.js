(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductDetailController', ProductDetailController);

    ProductDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Product', 'Shop', 'ProductPropertyValue', 'ProductContent', 'ProductStatus', 'ProductType'];

    function ProductDetailController($scope, $rootScope, $stateParams, entity, Product, Shop, ProductPropertyValue, ProductContent, ProductStatus, ProductType) {
        var vm = this;

        vm.product = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:productUpdate', function(event, result) {
            vm.product = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
