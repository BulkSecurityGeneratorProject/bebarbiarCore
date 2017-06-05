(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('product-property', {
            parent: 'entity',
            url: '/product-property',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productProperty.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-property/product-properties.html',
                    controller: 'ProductPropertyController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productProperty');
                    $translatePartialLoader.addPart('propertyType');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('product-property-detail', {
            parent: 'entity',
            url: '/product-property/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productProperty.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-property/product-property-detail.html',
                    controller: 'ProductPropertyDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productProperty');
                    $translatePartialLoader.addPart('productPropertyType');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ProductProperty', function($stateParams, ProductProperty) {
                    return ProductProperty.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('product-property.new', {
            parent: 'product-property',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-property/product-property-dialog.html',
                    controller: 'ProductPropertyDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                identifier: null,
                                productPropertyTypetype: null,
                                icon: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('product-property', null, { reload: true });
                }, function() {
                    $state.go('product-property');
                });
            }]
        })
        .state('product-property.edit', {
            parent: 'product-property',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-property/product-property-dialog.html',
                    controller: 'ProductPropertyDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ProductProperty', function(ProductProperty) {
                            return ProductProperty.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-property', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('product-property.delete', {
            parent: 'product-property',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-property/product-property-delete-dialog.html',
                    controller: 'ProductPropertyDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ProductProperty', function(ProductProperty) {
                            return ProductProperty.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-property', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
