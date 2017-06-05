(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('user-new-place', {
            parent: 'entity',
            url: '/user-new-place?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.userNewPlace.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/user-new-place/user-new-places.html',
                    controller: 'UserNewPlaceController',
                    controllerAs: 'vm'
                }
            },
            params: {
                page: {
                    value: '1',
                    squash: true
                },
                sort: {
                    value: 'id,asc',
                    squash: true
                },
                search: null
            },
            resolve: {
                pagingParams: ['$stateParams', 'PaginationUtil', function ($stateParams, PaginationUtil) {
                    return {
                        page: PaginationUtil.parsePage($stateParams.page),
                        sort: $stateParams.sort,
                        predicate: PaginationUtil.parsePredicate($stateParams.sort),
                        ascending: PaginationUtil.parseAscending($stateParams.sort),
                        search: $stateParams.search
                    };
                }],
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('userNewPlace');
                    $translatePartialLoader.addPart('userNewPlaceStatus');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('user-new-place-detail', {
            parent: 'entity',
            url: '/user-new-place/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.userNewPlace.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/user-new-place/user-new-place-detail.html',
                    controller: 'UserNewPlaceDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('userNewPlace');
                    $translatePartialLoader.addPart('userNewPlaceStatus');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'UserNewPlace', function($stateParams, UserNewPlace) {
                    return UserNewPlace.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('user-new-place.new', {
            parent: 'user-new-place',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/user-new-place/user-new-place-dialog.html',
                    controller: 'UserNewPlaceDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                longitude: null,
                                latitude: null,
                                description: null,
                                status: null,
                                createDate: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('user-new-place', null, { reload: true });
                }, function() {
                    $state.go('user-new-place');
                });
            }]
        })
        .state('user-new-place.edit', {
            parent: 'user-new-place',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/user-new-place/user-new-place-dialog.html',
                    controller: 'UserNewPlaceDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['UserNewPlace', function(UserNewPlace) {
                            return UserNewPlace.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('user-new-place', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('user-new-place.delete', {
            parent: 'user-new-place',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/user-new-place/user-new-place-delete-dialog.html',
                    controller: 'UserNewPlaceDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['UserNewPlace', function(UserNewPlace) {
                            return UserNewPlace.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('user-new-place', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
