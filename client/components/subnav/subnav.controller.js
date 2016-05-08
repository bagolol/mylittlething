'use strict';

class SubnavController {
    //start-non-standard
    menu = [
        {'title': 'dashboard', 'state': 'dashboard'},
        {'title': 'profile','state':'edit'},
        {'title': 'inbox', 'state': 'inbox'},
        {'title': 'my shows', 'state': 'shows'}
    ];

    isCollapsed = true;
    //end-non-standard

}

angular.module('telebuddiesApp')
    .controller('SubnavController', SubnavController);