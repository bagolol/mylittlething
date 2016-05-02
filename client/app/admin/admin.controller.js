'use strict';

(function() {

class AdminController {

    constructor(User, $scope, socket, $http) {
        this.$http = $http;
        this.users = [];
        // Use the User $resource to fetch all users
        $http.get('api/users').then(response => {
            this.users = response.data;
            socket.syncUpdates('user', this.users);
        })
        // this.users = User.query();


        $scope.$on('$destroy', function() {
            socket.unsyncUpdates('user');
        });
    }
    deleteUser(user) {
        this.$http.delete('/api/users/' + user._id);
        // user.$remove(function(){
        //     console.log("removed")
        // });
        // this.users.splice(this.users.indexOf(user), 1);
    };
}

angular.module('telebuddiesApp.admin')
  .controller('AdminController', AdminController);
})();
