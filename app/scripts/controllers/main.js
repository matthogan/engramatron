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
    
    $scope.life = "I am here";

    $scope.editIdea = "Thoughts go in here...";

    $scope.ideas = 
    [
      {'ideaId':'12342342','data':'I have an idea! I have a wife and can\'t keep her. Put her in a pumpkin shell. There I\'ll keep her very well. That ought to do it.','name':'Matthew Hogan','createdTimestamp':'04/05/2015'},
      {'ideaId':'25452233','data':'Hey diddle, diddle, the cat and the fiddle. The cow jumped over the moon, the little dog laughed to see such fun and the dish ran away with the spoon.','name':'Geraldine Matter','createdTimestamp':'04/05/2013'},
      {'ideaId':'35634543','data':'And this is the last','name':'Shana Garzaldin','createdTimestamp':'04/05/2014'}
    ];
    
    $scope.getIdeas = function()
    {
        return $scope.ideas;
    }

    $scope.createIdea = function()
    {
        /*document.createIdeaForm.idea.value;

        if( !idea )
        {
            return;
        }

        if( !idea.data )
        {
            handleError( 'How Nietsche...' );
        }

        idea.name = 'Valued Customer';
        idea.createdTimestamp = 'Right now';

        $scope.ideas.push( idea ); */
    }

    $scope.meaningOfLife = function(){return 'hi'};

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
