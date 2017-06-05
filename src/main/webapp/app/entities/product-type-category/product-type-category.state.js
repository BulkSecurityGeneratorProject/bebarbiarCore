(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('product-type-category', {
            parent: 'entity',
            url: '/product-type-category',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productTypeCategory.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-type-category/product-type-categories.html',
                    controller: 'ProductTypeCategoryController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productTypeCategory');
                    $translatePartialLoader.addPart('categoryType');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('product-type-category-detail', {
            parent: 'entity',
            url: '/product-type-category/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productTypeCategory.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-type-category/product-type-category-detail.html',
                    controller: 'ProductTypeCategoryDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productTypeCategory');
                    $translatePartialLoader.addPart('categoryType');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ProductTypeCategory', function($stateParams, ProductTypeCategory) {
                    return ProductTypeCategory.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'product-type-category',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('product-type-category-detail.edit', {
            parent: 'product-type-category-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-type-category/product-type-category-dialog.html',
                    controller: 'ProductTypeCategoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ProductTypeCategory', function(ProductTypeCategory) {
                            return ProductTypeCategory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('product-type-category.new', {
            parent: 'product-type-category',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-type-category/product-type-category-dialog.html',
                    controller: 'ProductTypeCategoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                description: null,
                                icon: null,
                                color: null,
                                path: null,
                                orderIndex: null,
                                iconImage: null,
                                iconImageContentType: null,
                                categoryType: null,
                                pin: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('product-type-category', null, { reload: 'product-type-category' });
                }, function() {
                    $state.go('product-type-category');
                });
            }]
        })
        .state('product-type-category.edit', {
            parent: 'product-type-category',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-type-category/product-type-category-dialog.html',
                    controller: 'ProductTypeCategoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ProductTypeCategory', function(ProductTypeCategory) {
                            return ProductTypeCategory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-type-category', null, { reload: 'product-type-category' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('product-type-category.delete', {
            parent: 'product-type-category',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-type-category/product-type-category-delete-dialog.html',
                    controller: 'ProductTypeCategoryDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ProductTypeCategory', function(ProductTypeCategory) {
                            return ProductTypeCategory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-type-category', null, { reload: 'product-type-category' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
