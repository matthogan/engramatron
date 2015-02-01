'use strict';

describe('Controller: IdeaCtrl', function () {

  // load the controller's module
  beforeEach(module('engramatronApp'));

  var IdeaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdeaCtrl = $controller('IdeaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
