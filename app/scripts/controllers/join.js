'use strict';

/**
 * @ngdoc function
 * @name engramatronApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the engramatronApp
 */
angular.module('engramatronApp')
  .controller('JoinCtrl', function ($scope,$http,$q,$log,api,ENV) {
    

  	$scope.join = function(credentials)
  	{
  		credentials.question = 'MN';
  		credentials.answer = 'Denham';

  		var promise = api.createUser($q,$http,$log,ENV,credentials);
    
    	promise.then(
	    	function(payload)
	    	{
	    		$scope.errorText = payload.text;
	    	},
	    	function(errorPayload)
	    	{
	    		$scope.errorText = 'Service Offline';
	    		$log.error(errorPayload);
	    	}
    	);
  	}

  });
