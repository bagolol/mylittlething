'use strict';

angular.module('telebuddiesApp', [
  'telebuddiesApp.auth',
  'telebuddiesApp.admin',
  'telebuddiesApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
