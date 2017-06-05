(function() {
    'use strict';

    angular
        .module('productManagementApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('user-contact', {
            parent: 'entity',
            url: '/user-contact',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.userContact.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/user-contact/user-contacts.html',
                    controller: 'UserContactController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('userContact');
                    $translatePartialLoader.addPart('contactType');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('user-contact-detail', {
            parent: 'entity',
            url: '/user-contact/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'productManagementApp.userContact.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/user-contact/user-contact-detail.html',
                    controller: 'UserContactDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('userContact');
                    $translatePartialLoader.addPart('contactType');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'UserContact', function($stateParams, UserContact) {
                    return UserContact.get({id : $stateParams.id}).$promise;
                }]
            }
        })
        .state('user-contact.new', {
            parent: 'user-contact',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/user-contact/user-contact-dialog.html',
                    controller: 'UserContactDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                value: null,
                                contactType: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('user-contact', null, { reload: true });
                }, function() {
                    $state.go('user-contact');
                });
            }]
        })
        .state('user-contact.edit', {
            parent: 'user-contact',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/user-contact/user-contact-dialog.html',
                    controller: 'UserContactDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['UserContact', function(UserContact) {
                            return UserContact.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('user-contact', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('user-contact.delete', {
            parent: 'user-contact',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/user-contact/user-contact-delete-dialog.html',
                    controller: 'UserContactDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['UserContact', function(UserContact) {
                            return UserContact.get({id : $stateParams.id}).$promise;
                        }]
                    }
                }).result.then(function() {
                    $state.go('user-contact', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
