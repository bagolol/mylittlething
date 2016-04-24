'use strict';

(function() {

class AdminController {
    constructor(User, $scope, socket) {
        // Use the User $resource to fetch all users
        this.users = User.query();
        console.log(this.users);
        socket.syncUpdates('user', this.users);

        $scope.$on('$destroy', function() {
            socket.unsyncUpdates('user');
        });
    }
    deleteUser(user) {
        this.users.splice(this.users.indexOf(user), 1);
    };
}

angular.module('telebuddiesApp.admin')
  .controller('AdminController', AdminController);
})();
