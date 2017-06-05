(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('color', {
            parent: 'entity',
            url: '/color?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.color.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/color/colors.html',
                    controller: 'ColorController',
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
                    $translatePartialLoader.addPart('color');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('color-detail', {
            parent: 'entity',
            url: '/color/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.color.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/color/color-detail.html',
                    controller: 'ColorDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('color');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Color', function($stateParams, Color) {
                    return Color.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('color.new', {
            parent: 'color',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/color/color-dialog.html',
                    controller: 'ColorDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                name: null,
                                code: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('color', null, { reload: true });
                }, function() {
                    $state.go('color');
                });
            }]
        })
        .state('color.edit', {
            parent: 'color',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/color/color-dialog.html',
                    controller: 'ColorDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Color', function(Color) {
                            return Color.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('color', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('color.delete', {
            parent: 'color',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/color/color-delete-dialog.html',
                    controller: 'ColorDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Color', function(Color) {
                            return Color.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('color', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
