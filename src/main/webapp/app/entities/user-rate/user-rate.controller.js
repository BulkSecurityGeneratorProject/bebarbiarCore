(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserRateController', UserRateController);

    UserRateController.$inject = ['$scope', '$state', 'UserRate', 'UserRateSearch'];

    function UserRateController ($scope, $state, UserRate, UserRateSearch) {
        var vm = this;
        
        vm.userRates = [];
        vm.search = search;

        loadAll();

        function loadAll() {
            UserRate.query(function(result) {
                vm.userRates = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            UserRateSearch.query({query: vm.searchQuery}, function(result) {
                vm.userRates = result;
            });
        }    }
})();
