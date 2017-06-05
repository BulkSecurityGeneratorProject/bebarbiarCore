(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('product-property-value', {
            parent: 'entity',
            url: '/product-property-value',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productPropertyValue.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-property-value/product-property-values.html',
                    controller: 'ProductPropertyValueController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productPropertyValue');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('product-property-value-detail', {
            parent: 'entity',
            url: '/product-property-value/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productPropertyValue.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-property-value/product-property-value-detail.html',
                    controller: 'ProductPropertyValueDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productPropertyValue');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ProductPropertyValue', function($stateParams, ProductPropertyValue) {
                    return ProductPropertyValue.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('product-property-value.new', {
            parent: 'product-property-value',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-property-value/product-property-value-dialog.html',
                    controller: 'ProductPropertyValueDialogController',
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
                    $state.go('product-property-value', null, { reload: true });
                }, function() {
                    $state.go('product-property-value');
                });
            }]
        })
        .state('product-property-value.edit', {
            parent: 'product-property-value',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-property-value/product-property-value-dialog.html',
                    controller: 'ProductPropertyValueDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ProductPropertyValue', function(ProductPropertyValue) {
                            return ProductPropertyValue.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-property-value', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('product-property-value.delete', {
            parent: 'product-property-value',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-property-value/product-property-value-delete-dialog.html',
                    controller: 'ProductPropertyValueDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ProductPropertyValue', function(ProductPropertyValue) {
                            return ProductPropertyValue.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-property-value', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
