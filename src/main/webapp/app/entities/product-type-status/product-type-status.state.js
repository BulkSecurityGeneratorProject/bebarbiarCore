(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('product-type-status', {
            parent: 'entity',
            url: '/product-type-status',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productTypeStatus.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-type-status/product-type-statuses.html',
                    controller: 'ProductTypeStatusController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productTypeStatus');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('product-type-status-detail', {
            parent: 'entity',
            url: '/product-type-status/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productTypeStatus.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-type-status/product-type-status-detail.html',
                    controller: 'ProductTypeStatusDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productTypeStatus');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ProductTypeStatus', function($stateParams, ProductTypeStatus) {
                    return ProductTypeStatus.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('product-type-status.new', {
            parent: 'product-type-status',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-type-status/product-type-status-dialog.html',
                    controller: 'ProductTypeStatusDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                orderIndex: null,
                                code: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('product-type-status', null, { reload: true });
                }, function() {
                    $state.go('product-type-status');
                });
            }]
        })
        .state('product-type-status.edit', {
            parent: 'product-type-status',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-type-status/product-type-status-dialog.html',
                    controller: 'ProductTypeStatusDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ProductTypeStatus', function(ProductTypeStatus) {
                            return ProductTypeStatus.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-type-status', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('product-type-status.delete', {
            parent: 'product-type-status',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-type-status/product-type-status-delete-dialog.html',
                    controller: 'ProductTypeStatusDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ProductTypeStatus', function(ProductTypeStatus) {
                            return ProductTypeStatus.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-type-status', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
