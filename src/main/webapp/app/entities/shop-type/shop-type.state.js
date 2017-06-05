(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('shop-type', {
            parent: 'entity',
            url: '/shop-type?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.shopType.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/shop-type/shop-types.html',
                    controller: 'ShopTypeController',
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
                    $translatePartialLoader.addPart('shopType');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('shop-type-detail', {
            parent: 'entity',
            url: '/shop-type/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.shopType.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/shop-type/shop-type-detail.html',
                    controller: 'ShopTypeDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('shopType');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ShopType', function($stateParams, ShopType) {
                    return ShopType.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('shop-type.new', {
            parent: 'shop-type',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-type/shop-type-dialog.html',
                    controller: 'ShopTypeDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                description: null,
                                color: null,
                                icon: null,
                                banner: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('shop-type', null, { reload: true });
                }, function() {
                    $state.go('shop-type');
                });
            }]
        })
        .state('shop-type.edit', {
            parent: 'shop-type',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-type/shop-type-dialog.html',
                    controller: 'ShopTypeDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ShopType', function(ShopType) {
                            return ShopType.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('shop-type', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('shop-type.delete', {
            parent: 'shop-type',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-type/shop-type-delete-dialog.html',
                    controller: 'ShopTypeDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ShopType', function(ShopType) {
                            return ShopType.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('shop-type', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
