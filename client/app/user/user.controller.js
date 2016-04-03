'use strict';

(function() {

class UserController {

  constructor($http, $scope, socket, User) {
    this.$http = $http;
    this.currentUser;

    $http.get('/api/users/me').then(response => {
        console.log(response.data)
      this.currentUser = response.data;
      // socket.syncUpdates('thing', this.awesomeThings);
    });
  }
}


angular.module('telebuddiesApp')
  .controller('UserController', UserController)
})();
