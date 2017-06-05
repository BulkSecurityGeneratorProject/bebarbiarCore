(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('StateController', StateController);

    StateController.$inject = ['$scope', '$state', 'State', 'StateSearch'];

    function StateController ($scope, $state, State, StateSearch) {
        var vm = this;
        
        vm.states = [];
        vm.search = search;

        loadAll();

        function loadAll() {
            State.query(function(result) {
                vm.states = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            StateSearch.query({query: vm.searchQuery}, function(result) {
                vm.states = result;
            });
        }    }
})();
