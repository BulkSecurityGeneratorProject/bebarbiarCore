(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductStatusHistoryDetailController', ProductStatusHistoryDetailController);

    ProductStatusHistoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'ProductStatusHistory', 'Product', 'ProductStatus'];

    function ProductStatusHistoryDetailController($scope, $rootScope, $stateParams, entity, ProductStatusHistory, Product, ProductStatus) {
        var vm = this;

        vm.productStatusHistory = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:productStatusHistoryUpdate', function(event, result) {
            vm.productStatusHistory = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
