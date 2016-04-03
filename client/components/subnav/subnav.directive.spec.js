'use strict';

describe('Directive: subnav', function () {

  // load the directive's module and view
  beforeEach(module('telebuddiesApp'));
  beforeEach(module('components/subnav/subnav.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<subnav></subnav>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the subnav directive');
  }));
});
