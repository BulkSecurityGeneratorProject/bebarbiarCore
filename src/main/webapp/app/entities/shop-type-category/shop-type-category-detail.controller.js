(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopTypeCategoryDetailController', ShopTypeCategoryDetailController);

    ShopTypeCategoryDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'ShopTypeCategory'];

    function ShopTypeCategoryDetailController($scope, $rootScope, $stateParams, entity, ShopTypeCategory) {
        var vm = this;

        vm.shopTypeCategory = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:shopTypeCategoryUpdate', function(event, result) {
            vm.shopTypeCategory = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
