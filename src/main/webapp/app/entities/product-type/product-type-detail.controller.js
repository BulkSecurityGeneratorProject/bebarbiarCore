(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTypeDetailController', ProductTypeDetailController);

    ProductTypeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'ProductType', 'ProductTypeStatus', 'ProductProperty'];

    function ProductTypeDetailController($scope, $rootScope, $stateParams, DataUtils, entity, ProductType, ProductTypeStatus, ProductProperty) {
        var vm = this;

        vm.productType = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('productManagementApp:productTypeUpdate', function(event, result) {
            vm.productType = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
