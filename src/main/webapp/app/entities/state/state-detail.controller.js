(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('StateDetailController', StateDetailController);

    StateDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'State'];

    function StateDetailController($scope, $rootScope, $stateParams, entity, State) {
        var vm = this;

        vm.state = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:stateUpdate', function(event, result) {
            vm.state = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
