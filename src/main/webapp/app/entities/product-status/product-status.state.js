(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('product-status', {
            parent: 'entity',
            url: '/product-status',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productStatus.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-status/product-statuses.html',
                    controller: 'ProductStatusController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productStatus');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('product-status-detail', {
            parent: 'entity',
            url: '/product-status/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productStatus.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-status/product-status-detail.html',
                    controller: 'ProductStatusDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productStatus');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ProductStatus', function($stateParams, ProductStatus) {
                    return ProductStatus.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('product-status.new', {
            parent: 'product-status',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-status/product-status-dialog.html',
                    controller: 'ProductStatusDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('product-status', null, { reload: true });
                }, function() {
                    $state.go('product-status');
                });
            }]
        })
        .state('product-status.edit', {
            parent: 'product-status',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-status/product-status-dialog.html',
                    controller: 'ProductStatusDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ProductStatus', function(ProductStatus) {
                            return ProductStatus.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-status', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('product-status.delete', {
            parent: 'product-status',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-status/product-status-delete-dialog.html',
                    controller: 'ProductStatusDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ProductStatus', function(ProductStatus) {
                            return ProductStatus.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-status', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
