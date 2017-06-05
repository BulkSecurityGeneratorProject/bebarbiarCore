(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('CommentDetailController', CommentDetailController);

    CommentDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Comment', 'Product', 'User', 'Shop'];

    function CommentDetailController($scope, $rootScope, $stateParams, entity, Comment, Product, User, Shop) {
        var vm = this;

        vm.comment = entity;

        var unsubscribe = $rootScope.$on('productManagementApp:commentUpdate', function(event, result) {
            vm.comment = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
