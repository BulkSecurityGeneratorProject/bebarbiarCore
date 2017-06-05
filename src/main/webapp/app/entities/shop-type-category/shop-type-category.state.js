(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('shop-type-category', {
            parent: 'entity',
            url: '/shop-type-category?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.shopTypeCategory.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/shop-type-category/shop-type-categories.html',
                    controller: 'ShopTypeCategoryController',
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
                    $translatePartialLoader.addPart('shopTypeCategory');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('shop-type-category-detail', {
            parent: 'entity',
            url: '/shop-type-category/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.shopTypeCategory.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/shop-type-category/shop-type-category-detail.html',
                    controller: 'ShopTypeCategoryDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('shopTypeCategory');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ShopTypeCategory', function($stateParams, ShopTypeCategory) {
                    return ShopTypeCategory.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('shop-type-category.new', {
            parent: 'shop-type-category',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-type-category/shop-type-category-dialog.html',
                    controller: 'ShopTypeCategoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                description: null,
                                iconUrl: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('shop-type-category', null, { reload: true });
                }, function() {
                    $state.go('shop-type-category');
                });
            }]
        })
        .state('shop-type-category.edit', {
            parent: 'shop-type-category',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-type-category/shop-type-category-dialog.html',
                    controller: 'ShopTypeCategoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ShopTypeCategory', function(ShopTypeCategory) {
                            return ShopTypeCategory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('shop-type-category', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('shop-type-category.delete', {
            parent: 'shop-type-category',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-type-category/shop-type-category-delete-dialog.html',
                    controller: 'ShopTypeCategoryDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ShopTypeCategory', function(ShopTypeCategory) {
                            return ShopTypeCategory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('shop-type-category', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
