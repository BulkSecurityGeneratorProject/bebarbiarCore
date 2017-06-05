(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductStatusDetailController', ProductStatusDetailController);

    ProductStatusDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'ProductStatus'];

    function ProductStatusDetailController($scope, $rootScope, $stateParams, entity, ProductStatus) {
        var vm = this;

        vm.productStatus = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:productStatusUpdate', function(event, result) {
            vm.productStatus = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
