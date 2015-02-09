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
        //$http.defaults.headers.common.Origin = ENV.origin;

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
      createUser: function ($q,$http,$log,ENV,credentials) {

        var body = {};

        body.username = credentials.username;
        body.email = credentials.email;
        body.name = credentials.name;
        body.credentials = {};
        body.credentials.username = credentials.username;
        body.credentials.password = credentials.password;
        body.credentials.question = credentials.question;
        body.credentials.answer = credentials.answer;
        
        $http.defaults.headers.common.Accept = 'application/json';
        $http.defaults.headers.common['Content-Type'] = 'application/json';
        //$http.defaults.headers.common.Origin = ENV.origin;

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
