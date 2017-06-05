(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('StartupModalController', StartupModalController);

    StartupModalController.$inject = ['$scope', '$state', 'StartupModal', 'StartupModalSearch'];

    function StartupModalController ($scope, $state, StartupModal, StartupModalSearch) {
        var vm = this;
        
        vm.startupModals = [];
        vm.search = search;

        loadAll();

        function loadAll() {
            StartupModal.query(function(result) {
                vm.startupModals = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            StartupModalSearch.query({query: vm.searchQuery}, function(result) {
                vm.startupModals = result;
            });
        }    }
})();
