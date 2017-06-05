(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductTypeCategoryController', ProductTypeCategoryController);

    ProductTypeCategoryController.$inject = ['$scope', '$state', 'DataUtils', 'ProductTypeCategory', 'ProductTypeCategorySearch'];

    function ProductTypeCategoryController ($scope, $state, DataUtils, ProductTypeCategory, ProductTypeCategorySearch) {
        var vm = this;

        vm.productTypeCategories = [];
        vm.openFile = DataUtils.openFile;
        vm.byteSize = DataUtils.byteSize;
        vm.clear = clear;
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            ProductTypeCategory.query(function(result) {
                vm.productTypeCategories = result;
                vm.searchQuery = null;
            });
        }

        function search() {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ProductTypeCategorySearch.query({query: vm.searchQuery}, function(result) {
                vm.productTypeCategories = result;
                vm.currentSearch = vm.searchQuery;
            });
        }

        function clear() {
            vm.searchQuery = null;
            loadAll();
        }    }
})();
