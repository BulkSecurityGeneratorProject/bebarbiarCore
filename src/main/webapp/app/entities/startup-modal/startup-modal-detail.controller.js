(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('StartupModalDetailController', StartupModalDetailController);

    StartupModalDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'StartupModal'];

    function StartupModalDetailController($scope, $rootScope, $stateParams, entity, StartupModal) {
        var vm = this;

        vm.startupModal = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:startupModalUpdate', function(event, result) {
            vm.startupModal = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
