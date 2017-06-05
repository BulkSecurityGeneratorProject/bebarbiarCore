(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('shop-property-category', {
            parent: 'entity',
            url: '/shop-property-category?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.shopPropertyCategory.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/shop-property-category/shop-property-categories.html',
                    controller: 'ShopPropertyCategoryController',
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
                    $translatePartialLoader.addPart('shopPropertyCategory');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('shop-property-category-detail', {
            parent: 'entity',
            url: '/shop-property-category/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.shopPropertyCategory.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/shop-property-category/shop-property-category-detail.html',
                    controller: 'ShopPropertyCategoryDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('shopPropertyCategory');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ShopPropertyCategory', function($stateParams, ShopPropertyCategory) {
                    return ShopPropertyCategory.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('shop-property-category.new', {
            parent: 'shop-property-category',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-property-category/shop-property-category-dialog.html',
                    controller: 'ShopPropertyCategoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                icon: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('shop-property-category', null, { reload: true });
                }, function() {
                    $state.go('shop-property-category');
                });
            }]
        })
        .state('shop-property-category.edit', {
            parent: 'shop-property-category',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-property-category/shop-property-category-dialog.html',
                    controller: 'ShopPropertyCategoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ShopPropertyCategory', function(ShopPropertyCategory) {
                            return ShopPropertyCategory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('shop-property-category', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('shop-property-category.delete', {
            parent: 'shop-property-category',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-property-category/shop-property-category-delete-dialog.html',
                    controller: 'ShopPropertyCategoryDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ShopPropertyCategory', function(ShopPropertyCategory) {
                            return ShopPropertyCategory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('shop-property-category', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
