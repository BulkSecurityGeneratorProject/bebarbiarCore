(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('base-parameter', {
            parent: 'entity',
            url: '/base-parameter',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.baseParameter.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/base-parameter/base-parameters.html',
                    controller: 'BaseParameterController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('baseParameter');
                    $translatePartialLoader.addPart('parameterType');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('base-parameter-detail', {
            parent: 'entity',
            url: '/base-parameter/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.baseParameter.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/base-parameter/base-parameter-detail.html',
                    controller: 'BaseParameterDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('baseParameter');
                    $translatePartialLoader.addPart('parameterType');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'BaseParameter', function($stateParams, BaseParameter) {
                    return BaseParameter.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('base-parameter.new', {
            parent: 'base-parameter',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/base-parameter/base-parameter-dialog.html',
                    controller: 'BaseParameterDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                value: null,
                                parameterType: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('base-parameter', null, { reload: true });
                }, function() {
                    $state.go('base-parameter');
                });
            }]
        })
        .state('base-parameter.edit', {
            parent: 'base-parameter',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/base-parameter/base-parameter-dialog.html',
                    controller: 'BaseParameterDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['BaseParameter', function(BaseParameter) {
                            return BaseParameter.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('base-parameter', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('base-parameter.delete', {
            parent: 'base-parameter',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/base-parameter/base-parameter-delete-dialog.html',
                    controller: 'BaseParameterDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['BaseParameter', function(BaseParameter) {
                            return BaseParameter.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('base-parameter', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
