'use strict';

(function() {

class EditController {

  constructor($http, $scope, Auth, User) {
    this.currentUser = User.get();
  }

  updateProfile(form) {
    if (form.$valid) {
        console.log(form);
    }

    // user.$edit();

  }
}

angular.module('telebuddiesApp')
  .controller('EditController', EditController)
})();
