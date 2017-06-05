(function() {
    'use strict';
    angular
        .module('productManagementApp')
        .factory('ProductsDetail', Product);

    Product.$inject = ['$resource'];

    function Product ($resource) {
        var resourceUrl =  'api/products/detail/:id';

        return $resource(resourceUrl, {}, {

            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            }

        });
    }
})();
