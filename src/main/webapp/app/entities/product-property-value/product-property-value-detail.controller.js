(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductPropertyValueDetailController', ProductPropertyValueDetailController);

    ProductPropertyValueDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'ProductPropertyValue', 'Product', 'ProductProperty'];

    function ProductPropertyValueDetailController($scope, $rootScope, $stateParams, entity, ProductPropertyValue, Product, ProductProperty) {
        var vm = this;

        vm.productPropertyValue = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:productPropertyValueUpdate', function(event, result) {
            vm.productPropertyValue = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
