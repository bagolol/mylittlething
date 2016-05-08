'use strict';

describe('Directive: inbox', function () {

  // load the directive's module and view
  beforeEach(module('telebuddiesApp'));
  beforeEach(module('app/user/profile/inbox/inbox.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<inbox></inbox>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the inbox directive');
  }));
});
