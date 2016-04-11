'use strict';

angular.module('telebuddiesApp', [
  'telebuddiesApp.auth',
  'telebuddiesApp.admin',
  'telebuddiesApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngMaterial',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $mdThemingProvider,
                    $locationProvider, $mdIconProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
