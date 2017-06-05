(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTypeStatusController', ProductTypeStatusController);

    ProductTypeStatusController.$inject = ['$scope', '$state', 'ProductTypeStatus', 'ProductTypeStatusSearch'];

    function ProductTypeStatusController ($scope, $state, ProductTypeStatus, ProductTypeStatusSearch) {
        var vm = this;
        
        vm.productTypeStatuses = [];
        vm.search = search;

        loadAll();

        function loadAll() {
            ProductTypeStatus.query(function(result) {
                vm.productTypeStatuses = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ProductTypeStatusSearch.query({query: vm.searchQuery}, function(result) {
                vm.productTypeStatuses = result;
            });
        }    }
})();
