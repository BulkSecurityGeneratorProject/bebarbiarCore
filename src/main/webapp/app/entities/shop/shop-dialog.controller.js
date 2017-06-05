(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ShopDialogController', ShopDialogController);

    ShopDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Shop', 'State', 'ShopPropertyValue', 'User', 'ShopType'];

    function ShopDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Shop, State, ShopPropertyValue, User, ShopType) {
        var vm = this;

        vm.shop = entity;
        vm.clear = clear;
        vm.save = save;
        vm.states = State.query();
        vm.shoppropertyvalues = ShopPropertyValue.query();
        vm.shops = Shop.query();
        vm.users = User.query();
        vm.shoptypes = ShopType.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.shop.id !== null) {
                Shop.update(vm.shop, onSaveSuccess, onSaveError);
            } else {
                Shop.save(vm.shop, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('productManagementApp:shopUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
