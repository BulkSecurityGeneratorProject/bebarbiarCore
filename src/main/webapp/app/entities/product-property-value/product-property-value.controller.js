(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductPropertyValueController', ProductPropertyValueController);

    ProductPropertyValueController.$inject = ['$scope', '$state', 'ProductPropertyValue', 'ProductPropertyValueSearch'];

    function ProductPropertyValueController ($scope, $state, ProductPropertyValue, ProductPropertyValueSearch) {
        var vm = this;
        
        vm.productPropertyValues = [];
        vm.search = search;

        loadAll();

        function loadAll() {
            ProductPropertyValue.query(function(result) {
                vm.productPropertyValues = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ProductPropertyValueSearch.query({query: vm.searchQuery}, function(result) {
                vm.productPropertyValues = result;
            });
        }    }
})();
