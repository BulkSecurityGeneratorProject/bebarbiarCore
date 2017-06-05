(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('shop-property', {
            parent: 'entity',
            url: '/shop-property?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.shopProperty.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/shop-property/shop-properties.html',
                    controller: 'ShopPropertyController',
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
                    $translatePartialLoader.addPart('shopProperty');
                    $translatePartialLoader.addPart('propertyType');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('shop-property-detail', {
            parent: 'entity',
            url: '/shop-property/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.shopProperty.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/shop-property/shop-property-detail.html',
                    controller: 'ShopPropertyDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('shopProperty');
                    $translatePartialLoader.addPart('propertyType');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ShopProperty', function($stateParams, ShopProperty) {
                    return ShopProperty.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'shop-property',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('shop-property-detail.edit', {
            parent: 'shop-property-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-property/shop-property-dialog.html',
                    controller: 'ShopPropertyDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ShopProperty', function(ShopProperty) {
                            return ShopProperty.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('shop-property.new', {
            parent: 'shop-property',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-property/shop-property-dialog.html',
                    controller: 'ShopPropertyDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                propertyType: null,
                                title: null,
                                identifier: null,
                                icon: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('shop-property', null, { reload: 'shop-property' });
                }, function() {
                    $state.go('shop-property');
                });
            }]
        })
        .state('shop-property.edit', {
            parent: 'shop-property',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-property/shop-property-dialog.html',
                    controller: 'ShopPropertyDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ShopProperty', function(ShopProperty) {
                            return ShopProperty.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('shop-property', null, { reload: 'shop-property' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('shop-property.delete', {
            parent: 'shop-property',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/shop-property/shop-property-delete-dialog.html',
                    controller: 'ShopPropertyDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ShopProperty', function(ShopProperty) {
                            return ShopProperty.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('shop-property', null, { reload: 'shop-property' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
