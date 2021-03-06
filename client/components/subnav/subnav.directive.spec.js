'use strict';

describe('Directive: subnav', function () {

  // load the directive's module and view
    beforeEach(module('telebuddiesApp'));
    beforeEach(module('components/subnav/subnav.html'));

    var element, scope,$httpBackend;

    beforeEach(inject(function ($rootScope, $injector) {
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.whenGET('app/main/main.html').respond(200, '');
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<subnav></subnav>');
        element = $compile(element)(scope);
        scope.$apply();
        expect(element.length).toBe(1);
    }));
});
