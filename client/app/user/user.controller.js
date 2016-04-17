'use strict';

(function() {

class UserController {

  constructor($http, $scope, socket, User, AlertService) {
    this.$http = $http;
    this.currentUser;

    if (AlertService.hasAlert()) {
        this.success = AlertService.getSuccess();
        AlertService.reset();
    }
    $http.get('/api/users/me').then(response => {
      this.currentUser = response.data;
      // socket.syncUpdates('thing', this.awesomeThings);
    });
  }
}

angular.module('telebuddiesApp')
  .controller('UserController', UserController)
})();
