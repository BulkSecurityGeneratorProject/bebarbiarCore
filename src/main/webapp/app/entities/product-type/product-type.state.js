(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('product-type', {
            parent: 'entity',
            url: '/product-type',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productType.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-type/product-types.html',
                    controller: 'ProductTypeController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productType');
                    $translatePartialLoader.addPart('trustType');
                    $translatePartialLoader.addPart('productTypeActivityType');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('product-type-detail', {
            parent: 'entity',
            url: '/product-type/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productType.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-type/product-type-detail.html',
                    controller: 'ProductTypeDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productType');
                    $translatePartialLoader.addPart('trustType');
                    $translatePartialLoader.addPart('productTypeActivityType');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ProductType', function($stateParams, ProductType) {
                    return ProductType.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('product-type.new', {
            parent: 'product-type',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-type/product-type-dialog.html',
                    controller: 'ProductTypeDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                description: null,
                                trustType: null,
                                color: null,
                                icon: null,
                                banner: null,
                                bannerContentType: null,
                                bannerUrl: null,
                                productTypeActivityType: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('product-type', null, { reload: true });
                }, function() {
                    $state.go('product-type');
                });
            }]
        })
        .state('product-type.edit', {
            parent: 'product-type',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-type/product-type-dialog.html',
                    controller: 'ProductTypeDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ProductType', function(ProductType) {
                            return ProductType.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-type', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('product-type.delete', {
            parent: 'product-type',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-type/product-type-delete-dialog.html',
                    controller: 'ProductTypeDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ProductType', function(ProductType) {
                            return ProductType.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-type', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
