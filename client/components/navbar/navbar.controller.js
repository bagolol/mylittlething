'use strict';

class NavbarController {
    //start-non-standard
    menu = [{
        'title': 'home',
        'state': 'main'
    }];

    isCollapsed = false;
    //end-non-standard

    constructor(Auth) {
        this.isLoggedIn = Auth.isLoggedIn;
        this.isAdmin = Auth.isAdmin;
        this.getCurrentUser = Auth.getCurrentUser;
    }

    toggle() {
        if (this.isCollapsed) return this.isCollapsed = false
        return this.isCollapsed = true;
    }
}

angular.module('telebuddiesApp')
    .controller('NavbarController', NavbarController);