(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('BaseParameterDetailController', BaseParameterDetailController);

    BaseParameterDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'BaseParameter'];

    function BaseParameterDetailController($scope, $rootScope, $stateParams, entity, BaseParameter) {
        var vm = this;

        vm.baseParameter = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:baseParameterUpdate', function(event, result) {
            vm.baseParameter = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
