'use strict';

/**
 * @ngdoc service
 * @name engramatronApp.api
 * @description
 * # api
 * Factory in the engramatronApp.
 */
angular.module('engramatronApp')
  .factory('api', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
