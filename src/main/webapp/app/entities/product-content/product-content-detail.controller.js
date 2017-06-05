(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductContentDetailController', ProductContentDetailController);

    ProductContentDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'ProductContent', 'Product'];

    function ProductContentDetailController($scope, $rootScope, $stateParams, DataUtils, entity, ProductContent, Product) {
        var vm = this;

        vm.productContent = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('productManagementApp:productContentUpdate', function(event, result) {
            vm.productContent = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
