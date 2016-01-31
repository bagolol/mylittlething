'use strict';

angular.module('telebuddiesApp.auth', [
  'telebuddiesApp.constants',
  'telebuddiesApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
