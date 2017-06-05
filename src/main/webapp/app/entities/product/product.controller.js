(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['$scope', '$state', 'Product', 'ProductSearch'];

    function ProductController ($scope, $state, Product, ProductSearch) {
        var vm = this;
        
        vm.products = [];
        vm.search = search;

        loadAll();

        function loadAll() {
            Product.query(function(result) {
                vm.products = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ProductSearch.query({query: vm.searchQuery}, function(result) {
                vm.products = result;
            });
        }    }
})();
