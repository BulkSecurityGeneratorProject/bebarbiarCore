(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('comment-like', {
            parent: 'entity',
            url: '/comment-like',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.commentLike.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/comment-like/comment-likes.html',
                    controller: 'CommentLikeController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('commentLike');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('comment-like-detail', {
            parent: 'entity',
            url: '/comment-like/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.commentLike.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/comment-like/comment-like-detail.html',
                    controller: 'CommentLikeDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('commentLike');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'CommentLike', function($stateParams, CommentLike) {
                    return CommentLike.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('comment-like.new', {
            parent: 'comment-like',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/comment-like/comment-like-dialog.html',
                    controller: 'CommentLikeDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                dateOfLike: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('comment-like', null, { reload: true });
                }, function() {
                    $state.go('comment-like');
                });
            }]
        })
        .state('comment-like.edit', {
            parent: 'comment-like',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/comment-like/comment-like-dialog.html',
                    controller: 'CommentLikeDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['CommentLike', function(CommentLike) {
                            return CommentLike.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('comment-like', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('comment-like.delete', {
            parent: 'comment-like',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/comment-like/comment-like-delete-dialog.html',
                    controller: 'CommentLikeDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['CommentLike', function(CommentLike) {
                            return CommentLike.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('comment-like', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
