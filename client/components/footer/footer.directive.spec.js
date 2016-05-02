'use strict';

describe('Directive: footer', function () {

  // load the directive's module and view
    beforeEach(module('telebuddiesApp'));
    beforeEach(module('components/footer/footer.html'));

    var element, scope, $httpBackend;

    beforeEach(inject(function ($rootScope, $injector) {
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.whenGET('app/main/main.html').respond(200, '');
        scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
        element = angular.element('<footer></footer>');
        element = $compile(element)(scope);
        scope.$apply();

        expect(element.text().trim()).toBe('telebuddies 2016');
    }));
});
