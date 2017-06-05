(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductPropertyDetailController', ProductPropertyDetailController);

    ProductPropertyDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'ProductProperty', 'ProductPropertyCategory', 'ProductType'];

    function ProductPropertyDetailController($scope, $rootScope, $stateParams, entity, ProductProperty, ProductPropertyCategory, ProductType) {
        var vm = this;

        vm.productProperty = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:productPropertyUpdate', function(event, result) {
            vm.productProperty = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
