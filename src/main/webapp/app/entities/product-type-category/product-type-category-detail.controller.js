(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTypeCategoryDetailController', ProductTypeCategoryDetailController);

    ProductTypeCategoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'ProductTypeCategory', 'ProductTypeStatus'];

    function ProductTypeCategoryDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, ProductTypeCategory, ProductTypeStatus) {
        var vm = this;

        vm.productTypeCategory = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('productManagementApp:productTypeCategoryUpdate', function(event, result) {
            vm.productTypeCategory = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
