(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductStatusHistoryController', ProductStatusHistoryController);

    ProductStatusHistoryController.$inject = ['$scope', '$state', 'ProductStatusHistory', 'ProductStatusHistorySearch'];

    function ProductStatusHistoryController ($scope, $state, ProductStatusHistory, ProductStatusHistorySearch) {
        var vm = this;
        
        vm.productStatusHistories = [];
        vm.search = search;

        loadAll();

        function loadAll() {
            ProductStatusHistory.query(function(result) {
                vm.productStatusHistories = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ProductStatusHistorySearch.query({query: vm.searchQuery}, function(result) {
                vm.productStatusHistories = result;
            });
        }    }
})();
