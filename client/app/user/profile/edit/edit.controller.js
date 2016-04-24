'use strict';

(function() {

class EditController {
  submitted = false;
  user = {};

  constructor($state, $scope, Auth, AlertService, socket) {
    this.user = Auth.getCurrentUser();
    this.Auth = Auth;
    this.AlertService = AlertService;
    this.$state = $state;
    this.socket = socket;

  }

  updateProfile(form) {
    this.submitted = true;
    if (form.$valid) {
      this.Auth.editUser(this.user)
      .then(() => {
        this.AlertService.setSuccess({ show: true, msg: 'your profile has been updated successfully.' });
        this.$state.go('profile');

      })
      .catch(() => {
        this.AlertService.setError({ show: true, msg: 'your profile has NOT been updated successfully.' });
        });
    }
  }
}

angular.module('telebuddiesApp')
  .controller('EditController', EditController)
})();
