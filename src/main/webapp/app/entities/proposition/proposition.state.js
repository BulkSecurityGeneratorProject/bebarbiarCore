(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('proposition', {
            parent: 'entity',
            url: '/proposition',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.proposition.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/proposition/propositions.html',
                    controller: 'PropositionController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('proposition');
                    $translatePartialLoader.addPart('propositionType');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('proposition-detail', {
            parent: 'entity',
            url: '/proposition/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.proposition.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/proposition/proposition-detail.html',
                    controller: 'PropositionDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('proposition');
                    $translatePartialLoader.addPart('propositionType');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Proposition', function($stateParams, Proposition) {
                    return Proposition.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('proposition.new', {
            parent: 'proposition',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/proposition/proposition-dialog.html',
                    controller: 'PropositionDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                description: null,
                                propositionType: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('proposition', null, { reload: true });
                }, function() {
                    $state.go('proposition');
                });
            }]
        })
        .state('proposition.edit', {
            parent: 'proposition',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/proposition/proposition-dialog.html',
                    controller: 'PropositionDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Proposition', function(Proposition) {
                            return Proposition.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('proposition', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('proposition.delete', {
            parent: 'proposition',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/proposition/proposition-delete-dialog.html',
                    controller: 'PropositionDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Proposition', function(Proposition) {
                            return Proposition.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('proposition', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
