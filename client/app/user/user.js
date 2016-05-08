'use strict';

angular.module('telebuddiesApp')
  .config(function($stateProvider) {
	$stateProvider
	  .state('profile', {
		url: '/profile',
		templateUrl: 'app/user/user.html',
		controller: 'UserController',
		controllerAs: 'vm'
	}).state('edit', {
		url: '/profile/edit',
		templateUrl: 'app/user/profile/edit/edit.html',
		controller: 'EditController',
		controllerAs: 'vm'
	}).state('dashboard', {
        url: '/profile/dashboard',
        templateUrl: 'app/user/profile/dashboard/dashboard.html',
        controller: 'dashboardController',
        controllerAs: 'vm'
    }).state('inbox', {
        url: '/profile/inbox',
        templateUrl: 'app/user/profile/inbox/inbox.html',
        controller: 'inboxController',
        controllerAs: 'vm'
    }).state('shows', {
        url: '/profile/shows',
        templateUrl: 'app/user/profile/myShows/shows.html',
        controller: 'myShowsController',
        controllerAs: 'vm'
    });
});


