'use strict';

describe('Controller: TopCtrl', function () {

  // load the controller's module
  beforeEach(module('engramatronApp'));

  var TopCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopCtrl = $controller('TopCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
