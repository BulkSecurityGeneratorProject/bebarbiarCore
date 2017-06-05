(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('search-tracker', {
            parent: 'entity',
            url: '/search-tracker',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.searchTracker.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/search-tracker/search-trackers.html',
                    controller: 'SearchTrackerController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('searchTracker');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('search-tracker-detail', {
            parent: 'entity',
            url: '/search-tracker/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.searchTracker.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/search-tracker/search-tracker-detail.html',
                    controller: 'SearchTrackerDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('searchTracker');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'SearchTracker', function($stateParams, SearchTracker) {
                    return SearchTracker.get({id : $stateParams.id}).$promise;
                }],
                previousState: ["$state", function ($state) {
                    var currentStateData = {
                        name: $state.current.name || 'search-tracker',
                        params: $state.params,
                        url: $state.href($state.current.name, $state.params)
                    };
                    return currentStateData;
                }]
            }
        })
        .state('search-tracker-detail.edit', {
            parent: 'search-tracker-detail',
            url: '/detail/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/search-tracker/search-tracker-dialog.html',
                    controller: 'SearchTrackerDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['SearchTracker', function(SearchTracker) {
                            return SearchTracker.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('^', {}, { reload: false });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('search-tracker.new', {
            parent: 'search-tracker',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/search-tracker/search-tracker-dialog.html',
                    controller: 'SearchTrackerDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                datetime: null,
                                content: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('search-tracker', null, { reload: 'search-tracker' });
                }, function() {
                    $state.go('search-tracker');
                });
            }]
        })
        .state('search-tracker.edit', {
            parent: 'search-tracker',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/search-tracker/search-tracker-dialog.html',
                    controller: 'SearchTrackerDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['SearchTracker', function(SearchTracker) {
                            return SearchTracker.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('search-tracker', null, { reload: 'search-tracker' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('search-tracker.delete', {
            parent: 'search-tracker',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/search-tracker/search-tracker-delete-dialog.html',
                    controller: 'SearchTrackerDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['SearchTracker', function(SearchTracker) {
                            return SearchTracker.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('search-tracker', null, { reload: 'search-tracker' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
