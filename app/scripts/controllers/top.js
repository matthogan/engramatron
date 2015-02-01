'use strict';

/**
 * @ngdoc function
 * @name engramatronApp.controller:TopCtrl
 * @description
 * # TopCtrl
 * Controller of the engramatronApp
 */
angular.module('engramatronApp')
  .controller('TopCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
