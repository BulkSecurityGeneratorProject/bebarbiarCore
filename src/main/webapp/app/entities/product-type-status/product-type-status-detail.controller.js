(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTypeStatusDetailController', ProductTypeStatusDetailController);

    ProductTypeStatusDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'ProductTypeStatus'];

    function ProductTypeStatusDetailController($scope, $rootScope, $stateParams, entity, ProductTypeStatus) {
        var vm = this;

        vm.productTypeStatus = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:productTypeStatusUpdate', function(event, result) {
            vm.productTypeStatus = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
