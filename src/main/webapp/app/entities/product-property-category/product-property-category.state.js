(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('product-property-category', {
            parent: 'entity',
            url: '/product-property-category',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productPropertyCategory.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-property-category/product-property-categories.html',
                    controller: 'ProductPropertyCategoryController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productPropertyCategory');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('product-property-category-detail', {
            parent: 'entity',
            url: '/product-property-category/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productPropertyCategory.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-property-category/product-property-category-detail.html',
                    controller: 'ProductPropertyCategoryDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productPropertyCategory');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ProductPropertyCategory', function($stateParams, ProductPropertyCategory) {
                    return ProductPropertyCategory.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('product-property-category.new', {
            parent: 'product-property-category',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-property-category/product-property-category-dialog.html',
                    controller: 'ProductPropertyCategoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                iconUrl: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('product-property-category', null, { reload: true });
                }, function() {
                    $state.go('product-property-category');
                });
            }]
        })
        .state('product-property-category.edit', {
            parent: 'product-property-category',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-property-category/product-property-category-dialog.html',
                    controller: 'ProductPropertyCategoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ProductPropertyCategory', function(ProductPropertyCategory) {
                            return ProductPropertyCategory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-property-category', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('product-property-category.delete', {
            parent: 'product-property-category',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-property-category/product-property-category-delete-dialog.html',
                    controller: 'ProductPropertyCategoryDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ProductPropertyCategory', function(ProductPropertyCategory) {
                            return ProductPropertyCategory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-property-category', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
