'use strict';

/**
 * @ngdoc function
 * @name engramatronApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the engramatronApp
 */
angular.module('engramatronApp')
  .controller('MainCtrl', function ($scope,$http,$q,$log,userProfile,api,ENV) {
    
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.meaningOfLife = userProfile.someMethod();

    /* ************************
    Status Check
    ************************ */
    /* http://chariotsolutions.com/blog/post/angularjs-corner-using-promises-q-handle-asynchronous-calls/ */
    var promise = api.hello($q,$http,$log,ENV);
    
    promise.then(
    	function(payload)
    	{
    		$scope.hello = payload.text;
    	},
    	function(errorPayload)
    	{
    		$scope.hello = 'Tip Service Offline';
    		$log.error(errorPayload);
    	}
    );

  });
