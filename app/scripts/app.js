'use strict';

/**
 * @ngdoc overview
 * @name engramatronApp
 * @description
 * # engramatronApp
 *
 * Main module of the application.
 */
angular
  .module('engramatronApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/join', {
        templateUrl: 'views/join.html',
        controller: 'JoinCtrl'
      })
      .when('/top', {
        templateUrl: 'views/top.html',
        controller: 'TopCtrl'
      })
      .when('/idea', {
        templateUrl: 'views/idea.html',
        controller: 'IdeaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
