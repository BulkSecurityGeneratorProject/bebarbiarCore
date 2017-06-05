(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('product-discount', {
            parent: 'entity',
            url: '/product-discount?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productDiscount.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-discount/product-discounts.html',
                    controller: 'ProductDiscountController',
                    controllerAs: 'vm'
                }
            },
            params: {
                page: {
                    value: '1',
                    squash: true
                },
                sort: {
                    value: 'id,asc',
                    squash: true
                },
                search: null
            },
            resolve: {
                pagingParams: ['$stateParams', 'PaginationUtil', function ($stateParams, PaginationUtil) {
                    return {
                        page: PaginationUtil.parsePage($stateParams.page),
                        sort: $stateParams.sort,
                        predicate: PaginationUtil.parsePredicate($stateParams.sort),
                        ascending: PaginationUtil.parseAscending($stateParams.sort),
                        search: $stateParams.search
                    };
                }],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productDiscount');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('product-discount-detail', {
            parent: 'entity',
            url: '/product-discount/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productDiscount.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-discount/product-discount-detail.html',
                    controller: 'ProductDiscountDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productDiscount');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ProductDiscount', function($stateParams, ProductDiscount) {
                    return ProductDiscount.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('product-discount.new', {
            parent: 'product-discount',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-discount/product-discount-dialog.html',
                    controller: 'ProductDiscountDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                productTypePath: null,
                                discount: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('product-discount', null, { reload: true });
                }, function() {
                    $state.go('product-discount');
                });
            }]
        })
        .state('product-discount.edit', {
            parent: 'product-discount',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-discount/product-discount-dialog.html',
                    controller: 'ProductDiscountDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ProductDiscount', function(ProductDiscount) {
                            return ProductDiscount.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-discount', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('product-discount.delete', {
            parent: 'product-discount',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-discount/product-discount-delete-dialog.html',
                    controller: 'ProductDiscountDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ProductDiscount', function(ProductDiscount) {
                            return ProductDiscount.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-discount', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
