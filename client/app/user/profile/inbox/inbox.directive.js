'use strict';

angular.module('telebuddiesApp')
  .directive('inbox', function () {
    return {
      templateUrl: 'app/user/profile/inbox/inbox.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
