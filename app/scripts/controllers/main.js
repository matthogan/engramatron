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
    
    $scope.ideas = 
    [
      'idea':{'ideaId':'1','data':'This is just one idea'},
      'idea':{'ideaId':'2','data':'This is another one'},
      'idea':{'ideaId':'3','data':'And this is the last'}
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
