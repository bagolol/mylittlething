'use strict';

describe('Service: AlertService', function () {

  // load the service's module
  beforeEach(module('telebuddiesApp'));

  // instantiate service
  var AlertService;
  beforeEach(inject(function (_AlertService_) {
    AlertService = _AlertService_;
  }));

  it('should default to no alert to display', function () {
    expect(AlertService.hasAlert()).toBe(false);
  });

  it('should set a success message', function(){
    var success = { show: true, msg: 'success'};
    AlertService.setSuccess(success);
    expect(AlertService.getSuccess().msg).toBe('success');
  });

  it('should set an error message', function(){
    var error = { show: true, msg: 'error'};
    AlertService.setError(error);
    expect(AlertService.getError().msg).toBe('error');
  });

  it('should clear error and success messages once displayed', function(){
    var error = { show: true, msg: 'error'};
    var success = { show: true, msg: 'success'};
    AlertService.setSuccess(success);
    AlertService.setError(error);

    expect(AlertService.hasAlert()).toBe(true);
    AlertService.reset();
    expect(AlertService.hasAlert()).toBe(false);
  });
});
