(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('state', {
            parent: 'entity',
            url: '/state',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.state.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/state/states.html',
                    controller: 'StateController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('state');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('state-detail', {
            parent: 'entity',
            url: '/state/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.state.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/state/state-detail.html',
                    controller: 'StateDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('state');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'State', function($stateParams, State) {
                    return State.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('state.new', {
            parent: 'state',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/state/state-dialog.html',
                    controller: 'StateDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                latitude: null,
                                longitude: null,
                                name: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('state', null, { reload: true });
                }, function() {
                    $state.go('state');
                });
            }]
        })
        .state('state.edit', {
            parent: 'state',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/state/state-dialog.html',
                    controller: 'StateDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['State', function(State) {
                            return State.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('state', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('state.delete', {
            parent: 'state',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/state/state-delete-dialog.html',
                    controller: 'StateDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['State', function(State) {
                            return State.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('state', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
