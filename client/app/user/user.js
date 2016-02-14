'use strict';

angular.module('telebuddiesApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/user/user.html',
        controller: 'UserController',
        controllerAs: 'vm'
      });
  });
