(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('shop-content', {
            parent: 'entity',
            url: '/shop-content?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.shopContent.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/shop-content/shop-contents.html',
                    controller: 'ShopContentController',
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
                    $translatePartialLoader.addPart('shopContent');
                    $translatePartialLoader.addPart('contentType');
                    $translatePartialLoader.addPart('contentType');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('shop-content-detail', {
            parent: 'entity',
            url: '/shop-content/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.shopContent.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/shop-content/shop-content-detail.html',
                    controller: 'ShopContentDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('shopContent');
                    $translatePartialLoader.addPart('contentType');
                    $translatePartialLoader.addPart('contentType');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ShopContent', function($stateParams, ShopContent) {
                    return ShopContent.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('shop-content.new', {
            parent: 'shop-content',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-content/shop-content-dialog.html',
                    controller: 'ShopContentDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                contentUrl: null,
                                posterUrl: null,
                                contentType: null,
                                posterContentType: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('shop-content', null, { reload: true });
                }, function() {
                    $state.go('shop-content');
                });
            }]
        })
        .state('shop-content.edit', {
            parent: 'shop-content',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-content/shop-content-dialog.html',
                    controller: 'ShopContentDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ShopContent', function(ShopContent) {
                            return ShopContent.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('shop-content', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('shop-content.delete', {
            parent: 'shop-content',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-content/shop-content-delete-dialog.html',
                    controller: 'ShopContentDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ShopContent', function(ShopContent) {
                            return ShopContent.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('shop-content', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
