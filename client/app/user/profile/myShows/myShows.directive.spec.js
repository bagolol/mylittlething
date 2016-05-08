'use strict';

describe('Directive: myShows', function () {

  // load the directive's module and view
  beforeEach(module('telebuddiesApp'));
  beforeEach(module('app/user/profile/myShows/myShows.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-shows></my-shows>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the myShows directive');
  }));
});
