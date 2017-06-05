(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductDiscountDetailController', ProductDiscountDetailController);

    ProductDiscountDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'ProductDiscount', 'Product'];

    function ProductDiscountDetailController($scope, $rootScope, $stateParams, entity, ProductDiscount, Product) {
        var vm = this;

        vm.productDiscount = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:productDiscountUpdate', function(event, result) {
            vm.productDiscount = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
