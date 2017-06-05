(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductStatusController', ProductStatusController);

    ProductStatusController.$inject = ['$scope', '$state', 'ProductStatus', 'ProductStatusSearch'];

    function ProductStatusController ($scope, $state, ProductStatus, ProductStatusSearch) {
        var vm = this;
        
        vm.productStatuses = [];
        vm.search = search;

        loadAll();

        function loadAll() {
            ProductStatus.query(function(result) {
                vm.productStatuses = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ProductStatusSearch.query({query: vm.searchQuery}, function(result) {
                vm.productStatuses = result;
            });
        }    }
})();
