(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('RateInfoDetailController', RateInfoDetailController);

    RateInfoDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'RateInfo'];

    function RateInfoDetailController($scope, $rootScope, $stateParams, entity, RateInfo) {
        var vm = this;

        vm.rateInfo = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:rateInfoUpdate', function(event, result) {
            vm.rateInfo = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
