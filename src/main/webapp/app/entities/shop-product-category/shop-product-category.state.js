(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('shop-product-category', {
            parent: 'entity',
            url: '/shop-product-category?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.shopProductCategory.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/shop-product-category/shop-product-categories.html',
                    controller: 'ShopProductCategoryController',
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
                    $translatePartialLoader.addPart('shopProductCategory');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('shop-product-category-detail', {
            parent: 'entity',
            url: '/shop-product-category/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.shopProductCategory.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/shop-product-category/shop-product-category-detail.html',
                    controller: 'ShopProductCategoryDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('shopProductCategory');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ShopProductCategory', function($stateParams, ShopProductCategory) {
                    return ShopProductCategory.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('shop-product-category.new', {
            parent: 'shop-product-category',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-product-category/shop-product-category-dialog.html',
                    controller: 'ShopProductCategoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                isDefault: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('shop-product-category', null, { reload: true });
                }, function() {
                    $state.go('shop-product-category');
                });
            }]
        })
        .state('shop-product-category.edit', {
            parent: 'shop-product-category',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-product-category/shop-product-category-dialog.html',
                    controller: 'ShopProductCategoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ShopProductCategory', function(ShopProductCategory) {
                            return ShopProductCategory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('shop-product-category', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('shop-product-category.delete', {
            parent: 'shop-product-category',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-product-category/shop-product-category-delete-dialog.html',
                    controller: 'ShopProductCategoryDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ShopProductCategory', function(ShopProductCategory) {
                            return ShopProductCategory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('shop-product-category', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
