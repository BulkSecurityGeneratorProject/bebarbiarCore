(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('SearchTrackerDetailController', SearchTrackerDetailController);

    SearchTrackerDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'SearchTracker', 'ShopType', 'User'];

    function SearchTrackerDetailController($scope, $rootScope, $stateParams, previousState, entity, SearchTracker, ShopType, User) {
        var vm = this;

        vm.searchTracker = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('productManagementApp:searchTrackerUpdate', function(event, result) {
            vm.searchTracker = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
