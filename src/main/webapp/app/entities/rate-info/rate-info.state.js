(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('rate-info', {
            parent: 'entity',
            url: '/rate-info?page&sort&search',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.rateInfo.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/rate-info/rate-infos.html',
                    controller: 'RateInfoController',
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
                    $translatePartialLoader.addPart('rateInfo');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('rate-info-detail', {
            parent: 'entity',
            url: '/rate-info/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.rateInfo.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/rate-info/rate-info-detail.html',
                    controller: 'RateInfoDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('rateInfo');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'RateInfo', function($stateParams, RateInfo) {
                    return RateInfo.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('rate-info.new', {
            parent: 'rate-info',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/rate-info/rate-info-dialog.html',
                    controller: 'RateInfoDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                title: null,
                                rate: null,
                                changed: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('rate-info', null, { reload: true });
                }, function() {
                    $state.go('rate-info');
                });
            }]
        })
        .state('rate-info.edit', {
            parent: 'rate-info',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/rate-info/rate-info-dialog.html',
                    controller: 'RateInfoDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['RateInfo', function(RateInfo) {
                            return RateInfo.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('rate-info', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('rate-info.delete', {
            parent: 'rate-info',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/rate-info/rate-info-delete-dialog.html',
                    controller: 'RateInfoDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['RateInfo', function(RateInfo) {
                            return RateInfo.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('rate-info', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
