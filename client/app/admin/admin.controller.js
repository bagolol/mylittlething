'use strict';

(function() {

class AdminController {

    constructor(User, $scope, socket, $http) {
        this.$http = $http;
        // Use the User $resource to fetch all users
        this.users = User.query();
        socket.syncUpdates('user', this.users);

        $scope.$on('$destroy', function() {
            socket.unsyncUpdates('user');
        });
    }
    deleteUser(user) {
        // Use the User $resource to delete user
        user.$remove();
    };
}

angular.module('telebuddiesApp.admin')
  .controller('AdminController', AdminController);
})();
