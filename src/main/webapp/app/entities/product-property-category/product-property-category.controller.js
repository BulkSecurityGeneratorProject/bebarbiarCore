(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductPropertyCategoryController', ProductPropertyCategoryController);

    ProductPropertyCategoryController.$inject = ['$scope', '$state', 'DataUtils', 'ProductPropertyCategory', 'ProductPropertyCategorySearch'];

    function ProductPropertyCategoryController ($scope, $state, DataUtils, ProductPropertyCategory, ProductPropertyCategorySearch) {
        var vm = this;
        
        vm.productPropertyCategories = [];
        vm.openFile = DataUtils.openFile;
        vm.byteSize = DataUtils.byteSize;
        vm.search = search;

        loadAll();

        function loadAll() {
            ProductPropertyCategory.query(function(result) {
                vm.productPropertyCategories = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ProductPropertyCategorySearch.query({query: vm.searchQuery}, function(result) {
                vm.productPropertyCategories = result;
            });
        }    }
})();
