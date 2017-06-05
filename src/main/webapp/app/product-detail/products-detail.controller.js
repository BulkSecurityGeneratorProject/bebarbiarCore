(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .controller('ProductDetailController', HomeController);

    HomeController.$inject = ['$scope', '$state'];

    function HomeController ($scope, $state) {
        var vm = this;

        vm.tab=1;
// Set of Photos
        vm.photos = [];

        // initial image index
        vm._Index = 0;

        // if a current image is the same as requested image
        vm.isActive = function (index) {
            return vm._Index === index;
        };

        // show prev image
        vm.showPrev = function () {
            vm._Index = (vm._Index > 0) ? --vm._Index : vm.photos.length - 1;
        };

        // show next image
        $scope.showNext = function () {
            vm._Index = (vm._Index < vm.photos.length - 1) ? ++ vm._Index : 0;
        };

        // show a certain image
        vm.showPhoto = function (index) {
            vm._Index = index;
        };
    }
})();
