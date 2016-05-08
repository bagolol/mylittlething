'use strict';

angular.module('telebuddiesApp')
  .directive('myShows', function () {
    return {
      templateUrl: 'app/user/profile/myShows/myShows.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
