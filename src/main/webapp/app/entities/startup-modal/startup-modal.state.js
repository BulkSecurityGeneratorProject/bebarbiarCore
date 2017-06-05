(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('startup-modal', {
            parent: 'entity',
            url: '/startup-modal',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.startupModal.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/startup-modal/startup-modals.html',
                    controller: 'StartupModalController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('startupModal');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('startup-modal-detail', {
            parent: 'entity',
            url: '/startup-modal/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.startupModal.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/startup-modal/startup-modal-detail.html',
                    controller: 'StartupModalDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('startupModal');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'StartupModal', function($stateParams, StartupModal) {
                    return StartupModal.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('startup-modal.new', {
            parent: 'startup-modal',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/startup-modal/startup-modal-dialog.html',
                    controller: 'StartupModalDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                url: null,
                                index: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('startup-modal', null, { reload: true });
                }, function() {
                    $state.go('startup-modal');
                });
            }]
        })
        .state('startup-modal.edit', {
            parent: 'startup-modal',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/startup-modal/startup-modal-dialog.html',
                    controller: 'StartupModalDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['StartupModal', function(StartupModal) {
                            return StartupModal.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('startup-modal', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('startup-modal.delete', {
            parent: 'startup-modal',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/startup-modal/startup-modal-delete-dialog.html',
                    controller: 'StartupModalDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['StartupModal', function(StartupModal) {
                            return StartupModal.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('startup-modal', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
