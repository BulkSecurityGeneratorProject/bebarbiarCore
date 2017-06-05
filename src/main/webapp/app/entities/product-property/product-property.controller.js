(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductPropertyController', ProductPropertyController);

    ProductPropertyController.$inject = ['$scope', '$state', 'ProductProperty', 'ProductPropertySearch'];

    function ProductPropertyController ($scope, $state, ProductProperty, ProductPropertySearch) {
        var vm = this;
        
        vm.productProperties = [];
        vm.search = search;

        loadAll();

        function loadAll() {
            ProductProperty.query(function(result) {
                vm.productProperties = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ProductPropertySearch.query({query: vm.searchQuery}, function(result) {
                vm.productProperties = result;
            });
        }    }
})();
