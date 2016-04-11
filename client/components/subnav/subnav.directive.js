'use strict';

angular.module('telebuddiesApp')
  .directive('subnav', () => ({
    templateUrl: 'components/subnav/subnav.html',
    restrict: 'E',
    scope: {},
    controller: 'SubnavController',
    controllerAs: 'vm'
  }));
