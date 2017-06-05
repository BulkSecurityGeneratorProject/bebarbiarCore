(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTypeController', ProductTypeController);

    ProductTypeController.$inject = ['$scope', '$state', 'DataUtils', 'ProductType', 'ProductTypeSearch'];

    function ProductTypeController ($scope, $state, DataUtils, ProductType, ProductTypeSearch) {
        var vm = this;
        
        vm.productTypes = [];
        vm.openFile = DataUtils.openFile;
        vm.byteSize = DataUtils.byteSize;
        vm.search = search;

        loadAll();

        function loadAll() {
            ProductType.query(function(result) {
                vm.productTypes = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ProductTypeSearch.query({query: vm.searchQuery}, function(result) {
                vm.productTypes = result;
            });
        }    }
})();
