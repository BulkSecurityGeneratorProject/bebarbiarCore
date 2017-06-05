(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopController', ShopController);

    ShopController.$inject = ['$scope', '$state', 'Shop', 'ShopSearch'];

    function ShopController ($scope, $state, Shop, ShopSearch) {
        var vm = this;

        vm.shops = [];
        vm.clear = clear;
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Shop.query(function(result) {
                vm.shops = result;
                vm.searchQuery = null;
            });
        }

        function search() {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ShopSearch.query({query: vm.searchQuery}, function(result) {
                vm.shops = result;
                vm.currentSearch = vm.searchQuery;
            });
        }

        function clear() {
            vm.searchQuery = null;
            loadAll();
        }    }
})();
