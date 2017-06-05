(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTrustDetailController', ProductTrustDetailController);

    ProductTrustDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'ProductTrust', 'Product', 'User'];

    function ProductTrustDetailController($scope, $rootScope, $stateParams, entity, ProductTrust, Product, User) {
        var vm = this;

        vm.productTrust = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:productTrustUpdate', function(event, result) {
            vm.productTrust = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
