(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('PropositionDetailController', PropositionDetailController);

    PropositionDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Proposition', 'User'];

    function PropositionDetailController($scope, $rootScope, $stateParams, entity, Proposition, User) {
        var vm = this;

        vm.proposition = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:propositionUpdate', function(event, result) {
            vm.proposition = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
