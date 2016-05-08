'use strict';

angular.module('telebuddiesApp')
  .directive('dashboard', function () {
    return {
      templateUrl: 'app/user/profile/dashboard/dashboard.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
