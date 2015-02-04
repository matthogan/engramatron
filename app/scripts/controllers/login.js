'use strict';

/**
 * @ngdoc function
 * @name engramatronApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the engramatronApp
 */
angular.module('engramatronApp')
  .controller('LoginCtrl', function ($scope) {
    

  	$scope.login = function(credentials)
  	{
  		alert(credentials.email);
  	}

  });
