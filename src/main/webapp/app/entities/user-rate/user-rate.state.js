(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('user-rate', {
            parent: 'entity',
            url: '/user-rate',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.userRate.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/user-rate/user-rates.html',
                    controller: 'UserRateController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('userRate');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('user-rate-detail', {
            parent: 'entity',
            url: '/user-rate/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.userRate.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/user-rate/user-rate-detail.html',
                    controller: 'UserRateDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('userRate');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'UserRate', function($stateParams, UserRate) {
                    return UserRate.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('user-rate.new', {
            parent: 'user-rate',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/user-rate/user-rate-dialog.html',
                    controller: 'UserRateDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                value: null,
                                dateOfRate: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('user-rate', null, { reload: true });
                }, function() {
                    $state.go('user-rate');
                });
            }]
        })
        .state('user-rate.edit', {
            parent: 'user-rate',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/user-rate/user-rate-dialog.html',
                    controller: 'UserRateDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['UserRate', function(UserRate) {
                            return UserRate.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('user-rate', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('user-rate.delete', {
            parent: 'user-rate',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/user-rate/user-rate-delete-dialog.html',
                    controller: 'UserRateDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['UserRate', function(UserRate) {
                            return UserRate.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('user-rate', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
