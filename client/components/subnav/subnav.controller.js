'use strict';

class SubnavController {
  //start-non-standard
  menu = [{
    'title': 'profile',
    'state': 'edit'
  }];

  isCollapsed = true;
  //end-non-standard

}

angular.module('telebuddiesApp')
  .controller('SubnavController', SubnavController);
