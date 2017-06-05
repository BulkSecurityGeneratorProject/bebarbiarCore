(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('product-status-history', {
            parent: 'entity',
            url: '/product-status-history',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productStatusHistory.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-status-history/product-status-histories.html',
                    controller: 'ProductStatusHistoryController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productStatusHistory');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('product-status-history-detail', {
            parent: 'entity',
            url: '/product-status-history/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.productStatusHistory.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/product-status-history/product-status-history-detail.html',
                    controller: 'ProductStatusHistoryDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('productStatusHistory');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'ProductStatusHistory', function($stateParams, ProductStatusHistory) {
                    return ProductStatusHistory.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('product-status-history.new', {
            parent: 'product-status-history',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-status-history/product-status-history-dialog.html',
                    controller: 'ProductStatusHistoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                createDateTime: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('product-status-history', null, { reload: true });
                }, function() {
                    $state.go('product-status-history');
                });
            }]
        })
        .state('product-status-history.edit', {
            parent: 'product-status-history',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-status-history/product-status-history-dialog.html',
                    controller: 'ProductStatusHistoryDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['ProductStatusHistory', function(ProductStatusHistory) {
                            return ProductStatusHistory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-status-history', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('product-status-history.delete', {
            parent: 'product-status-history',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/product-status-history/product-status-history-delete-dialog.html',
                    controller: 'ProductStatusHistoryDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['ProductStatusHistory', function(ProductStatusHistory) {
                            return ProductStatusHistory.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('product-status-history', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
