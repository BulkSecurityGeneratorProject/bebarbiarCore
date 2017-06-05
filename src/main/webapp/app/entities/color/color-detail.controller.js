(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ColorDetailController', ColorDetailController);

    ColorDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Color'];

    function ColorDetailController($scope, $rootScope, $stateParams, entity, Color) {
        var vm = this;

        vm.color = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:colorUpdate', function(event, result) {
            vm.color = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
