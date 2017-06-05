(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('BaseParameterController', BaseParameterController);

    BaseParameterController.$inject = ['$scope', '$state', 'BaseParameter', 'BaseParameterSearch'];

    function BaseParameterController ($scope, $state, BaseParameter, BaseParameterSearch) {
        var vm = this;
        
        vm.baseParameters = [];
        vm.search = search;

        loadAll();

        function loadAll() {
            BaseParameter.query(function(result) {
                vm.baseParameters = result;
            });
        }

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            BaseParameterSearch.query({query: vm.searchQuery}, function(result) {
                vm.baseParameters = result;
            });
        }    }
})();
