(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductContentController', ProductContentController);

    ProductContentController.$inject = ['$scope', '$state', 'DataUtils', 'ProductContent', 'ProductContentSearch'];

    function ProductContentController ($scope, $state, DataUtils, ProductContent, ProductContentSearch) {
        var vm = this;
        
        vm.productContents = [];
        vm.openFile = DataUtils.openFile;
        vm.byteSize = DataUtils.byteSize;
        vm.search = search;

        loadAll();

        function loadAll() {
            ProductContent.query(function(result) {
                vm.productContents = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ProductContentSearch.query({query: vm.searchQuery}, function(result) {
                vm.productContents = result;
            });
        }    }
})();
