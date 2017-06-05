(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTrustController', ProductTrustController);

    ProductTrustController.$inject = ['$scope', '$state', 'ProductTrust', 'ProductTrustSearch'];

    function ProductTrustController ($scope, $state, ProductTrust, ProductTrustSearch) {
        var vm = this;
        
        vm.productTrusts = [];
        vm.search = search;

        loadAll();

        function loadAll() {
            ProductTrust.query(function(result) {
                vm.productTrusts = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ProductTrustSearch.query({query: vm.searchQuery}, function(result) {
                vm.productTrusts = result;
            });
        }    }
})();
