'use strict';

describe('Controller: SubnavCtrl', function () {

  // load the controller's module
  beforeEach(module('telebuddiesApp'));

  var SubnavCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubnavCtrl = $controller('SubnavCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
