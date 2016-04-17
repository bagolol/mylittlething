'use strict';

(function() {

class EditController {
  submitted = false;
  user = {};

  constructor($http, $scope, Auth) {
    this.user = Auth.getCurrentUser();
    this.Auth = Auth;
  }

  updateProfile(form) {
    this.submitted = true;
    if (form.$valid) {
      this.Auth.editUser(this.user)
      .then(() => {
        this.message = 'profile successfully updated';
      })

      // add catch to display errors
      // .catch(() => {
      //     form.password.$setValidity('mongoose', false);
      //     this.errors.other = 'Incorrect password';
      //     this.message = '';
      //   });
    }
  }
}

angular.module('telebuddiesApp')
  .controller('EditController', EditController)
})();
