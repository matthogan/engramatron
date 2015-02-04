'use strict';

/**
 * @ngdoc service
 * @name engramatronApp.userProfile
 * @description
 * # userProfile
 * Factory in the engramatronApp.
 */
angular.module('engramatronApp')
  .factory('userProfile', function () {
    // Service logic
    // ...

    var meaningOfLife = 41;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
