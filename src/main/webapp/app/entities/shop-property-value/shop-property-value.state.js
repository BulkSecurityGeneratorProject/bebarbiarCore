(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('shop-property-value', {
            parent: 'entity',
            url: '/shop-property-value?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.shopPropertyValue.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/shop-property-value/shop-property-values.html',
                    controller: 'ShopPropertyValueController',
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
                    $translatePartialLoader.addPart('shopPropertyValue');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('shop-property-value-detail', {
            parent: 'entity',
            url: '/shop-property-value/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.shopPropertyValue.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/shop-property-value/shop-property-value-detail.html',
                    controller: 'ShopPropertyValueDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('shopPropertyValue');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ShopPropertyValue', function($stateParams, ShopPropertyValue) {
                    return ShopPropertyValue.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('shop-property-value.new', {
            parent: 'shop-property-value',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-property-value/shop-property-value-dialog.html',
                    controller: 'ShopPropertyValueDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                value: null,
                                accepted: null,
                                fromDateTime: null,
                                toDateTime: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('shop-property-value', null, { reload: true });
                }, function() {
                    $state.go('shop-property-value');
                });
            }]
        })
        .state('shop-property-value.edit', {
            parent: 'shop-property-value',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-property-value/shop-property-value-dialog.html',
                    controller: 'ShopPropertyValueDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ShopPropertyValue', function(ShopPropertyValue) {
                            return ShopPropertyValue.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('shop-property-value', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('shop-property-value.delete', {
            parent: 'shop-property-value',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-property-value/shop-property-value-delete-dialog.html',
                    controller: 'ShopPropertyValueDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ShopPropertyValue', function(ShopPropertyValue) {
                            return ShopPropertyValue.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('shop-property-value', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
