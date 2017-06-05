(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('PropositionController', PropositionController);

    PropositionController.$inject = ['$scope', '$state', 'Proposition', 'PropositionSearch'];

    function PropositionController ($scope, $state, Proposition, PropositionSearch) {
        var vm = this;
        
        vm.propositions = [];
        vm.search = search;

        loadAll();

        function loadAll() {
            Proposition.query(function(result) {
                vm.propositions = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            PropositionSearch.query({query: vm.searchQuery}, function(result) {
                vm.propositions = result;
            });
        }    }
})();
