'use strict';

describe('Controller: UserController', function () {

  // load the controller's module
  beforeEach(module('telebuddiesApp.user'));

  var UserController, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserCtrl = $controller('UserController', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
