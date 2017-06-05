(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('UserContactController', UserContactController);

    UserContactController.$inject = ['$scope', '$state', 'UserContact', 'UserContactSearch'];

    function UserContactController ($scope, $state, UserContact, UserContactSearch) {
        var vm = this;
        
        vm.userContacts = [];
        vm.search = search;

        loadAll();

        function loadAll() {
            UserContact.query(function(result) {
                vm.userContacts = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            UserContactSearch.query({query: vm.searchQuery}, function(result) {
                vm.userContacts = result;
            });
        }    }
})();
