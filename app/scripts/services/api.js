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
        $http.defaults.headers.common.Origin =  'http://localhost:9000';

        var deferred = $q.defer();

        $http.get( ENV.tipHost + '/hello' ).
          success(function(data,status,headers,config){
            deferred.resolve({text:data});
          }).
          error(function(data,status,headers,config){
            deferred.reject({text:'Error ' + data});
          });

        return deferred.promise;
      }
    };
  });
