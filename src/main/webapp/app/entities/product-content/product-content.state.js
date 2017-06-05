(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('product-content', {
            parent: 'entity',
            url: '/product-content',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productContent.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-content/product-contents.html',
                    controller: 'ProductContentController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productContent');
                    $translatePartialLoader.addPart('productContentType');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('product-content-detail', {
            parent: 'entity',
            url: '/product-content/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productContent.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-content/product-content-detail.html',
                    controller: 'ProductContentDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productContent');
                    $translatePartialLoader.addPart('productContentType');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ProductContent', function($stateParams, ProductContent) {
                    return ProductContent.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('product-content.new', {
            parent: 'product-content',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-content/product-content-dialog.html',
                    controller: 'ProductContentDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                contentType: null,
                                posterUrl: null,
                                poster: null,
                                posterContentType: null,
                                content: null,
                                contentContentType: null,
                                description: null,
                                contentUrl: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('product-content', null, { reload: true });
                }, function() {
                    $state.go('product-content');
                });
            }]
        })
        .state('product-content.edit', {
            parent: 'product-content',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-content/product-content-dialog.html',
                    controller: 'ProductContentDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ProductContent', function(ProductContent) {
                            return ProductContent.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-content', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('product-content.delete', {
            parent: 'product-content',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-content/product-content-delete-dialog.html',
                    controller: 'ProductContentDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ProductContent', function(ProductContent) {
                            return ProductContent.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-content', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
