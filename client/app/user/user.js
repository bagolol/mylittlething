'use strict';

angular.module('telebuddiesApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/user/user.html',
        controller: 'UserController',
        controllerAs: 'vm'
    }).state('edit', {
        url: '/profile/edit',
        templateUrl: 'app/user/profile/edit/edit.html',
        controller: 'EditController',
        controllerAs: 'vm'
    });
});
