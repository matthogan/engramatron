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
      },
      /**
       * Status check - Service
       * Invokes the hello method
       */
      hello: function ($q,$http,$log,ENV) {
        
        $http.defaults.headers.common.Accept = 'text/plain';
        $http.defaults.headers.common['Content-Type'] = 'application/json'; 
        $http.defaults.headers.common.Origin =  ENV.origin;

        var deferred = $q.defer();

        $http.get( ENV.tipHost + '/hello' ).
          success(function(data,status,headers,config){
            deferred.resolve({text:data});
          }).
          error(function(data,status,headers,config){
            deferred.reject({text:'Error ' + data});
          });

        return deferred.promise;
      },
      /**
       * Status check - Service
       * Invokes the hello method
       */
      createUser: function ($q,$http,$log,ENV) {

        var body = {};

        body.username = 'matto';
        body.email = 'iammatthewhogan@gmail.com';
        body.name = 'Matthew Hogan';
        body.credentials = {};
        body.credentials.username = 'matto';
        body.credentials.password = 'password1';
        body.credentials.question = 'MN';
        body.credentials.answer = 'Denham';
        
        $http.defaults.headers.common.Accept = 'application/json';
        $http.defaults.headers.common['Content-Type'] = 'application/json';
        $http.defaults.headers.common.Origin =  ENV.origin;

        var deferred = $q.defer();

        $http.post( ENV.tipHost + '/user', body ).
          success(function(data,status,headers,config){
            deferred.resolve({user:data});
          }).
          error(function(data,status,headers,config){
            deferred.reject({user:data});
          });

        return deferred.promise;
      }
    };
  });
