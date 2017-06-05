(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('product-trust', {
            parent: 'entity',
            url: '/product-trust',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productTrust.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-trust/product-trusts.html',
                    controller: 'ProductTrustController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productTrust');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('product-trust-detail', {
            parent: 'entity',
            url: '/product-trust/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productTrust.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-trust/product-trust-detail.html',
                    controller: 'ProductTrustDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productTrust');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ProductTrust', function($stateParams, ProductTrust) {
                    return ProductTrust.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('product-trust.new', {
            parent: 'product-trust',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-trust/product-trust-dialog.html',
                    controller: 'ProductTrustDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                value: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('product-trust', null, { reload: true });
                }, function() {
                    $state.go('product-trust');
                });
            }]
        })
        .state('product-trust.edit', {
            parent: 'product-trust',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-trust/product-trust-dialog.html',
                    controller: 'ProductTrustDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ProductTrust', function(ProductTrust) {
                            return ProductTrust.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-trust', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('product-trust.delete', {
            parent: 'product-trust',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-trust/product-trust-delete-dialog.html',
                    controller: 'ProductTrustDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ProductTrust', function(ProductTrust) {
                            return ProductTrust.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-trust', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
