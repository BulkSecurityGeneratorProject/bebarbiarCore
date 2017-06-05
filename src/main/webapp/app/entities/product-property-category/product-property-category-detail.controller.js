(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductPropertyCategoryDetailController', ProductPropertyCategoryDetailController);

    ProductPropertyCategoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'DataUtils', 'entity', 'ProductPropertyCategory'];

    function ProductPropertyCategoryDetailController($scope, $rootScope, $stateParams, DataUtils, entity, ProductPropertyCategory) {
        var vm = this;

        vm.productPropertyCategory = entity;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('productManagementApp:productPropertyCategoryUpdate', function(event, result) {
            vm.productPropertyCategory = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
